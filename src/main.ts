import customGlobalPage from "./content_scripts/global";
import customProblemPage from "./content_scripts/problem";
import customSubmitPage from "./content_scripts/submit";

const url: string = window.location.pathname;

console.info("url=", url);

customGlobalPage();

if (url.startsWith("/problem/")) {
  customProblemPage();
}

// 뺐다가 submit 커밋할 때만 넣기
if (url.startsWith("/submit")) {
  customSubmitPage();
}
