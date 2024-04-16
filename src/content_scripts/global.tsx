import { getProblemId } from "./utils";

export default function customGlobalPage(): void {
  const addSolveButton = () => {
    const submitButton = document.querySelector(
      'ul.problem-menu li a[href*="/submit"]'
    );

    if (submitButton) {
      const submitListItem = submitButton.closest("li");

      if (submitListItem) {
        const solveButtonItem = document.createElement("li");
        const problemId = getProblemId();
        solveButtonItem.innerHTML = `<a href="/submit/${problemId}?solve=true">문제 풀기</a>`;

        submitListItem.parentNode?.insertBefore(
          solveButtonItem,
          submitListItem.nextSibling
        );
      }
    }
  };

  window.addEventListener("load", addSolveButton);
}
