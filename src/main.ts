import customGlobalPage from "./content_scripts/global";
import customProblemPage from "./content_scripts/problem";
import customSubmitPage from "./content_scripts/submit";

const url: string = window.location.pathname;

console.info("url=", url);

customGlobalPage();

if (url.startsWith("/problem/")) {
  customProblemPage();
}

if (url.startsWith("/submit")) {
  customSubmitPage();
}
