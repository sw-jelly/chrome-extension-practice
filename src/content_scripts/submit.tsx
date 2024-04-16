import { getProblemId } from "./utils";

export default function customSubmitPage(): void {
  const setProblemHTMLStyles = (problemHTML: HTMLElement): void => {
    // margin 없애기
    problemHTML.style.margin = "0";

    // 문제 메뉴 없애기
    const menu = problemHTML.querySelector("ul.problem-menu") as HTMLElement;
    if (menu && menu.parentNode) problemHTML.removeChild(menu.parentNode);

    // 즐겨찾기 버튼 없애기
    const problemButton = problemHTML.querySelector(
      ".problem-button"
    ) as HTMLElement;
    if (problemButton && problemButton.parentNode)
      problemButton.parentNode.removeChild(problemButton);

    // 알고리즘 분류 없애기
    const problemTag = problemHTML.querySelector(
      "#problem_tags"
    ) as HTMLElement;
    if (problemTag && problemTag.parentNode)
      problemHTML.removeChild(problemTag.parentNode);

    // 메모 없애기
    const problemMemo = problemHTML.querySelector(
      "#problem_memo"
    ) as HTMLElement;
    if (problemMemo && problemMemo.parentNode)
      problemHTML.removeChild(problemMemo.parentNode);
  };

  const createSplitViewLayout = (problemHTML: HTMLElement | null): void => {
    const problemMenu = document.querySelector(
      "ul.problem-menu"
    ) as HTMLElement;
    problemMenu.style.marginBottom = "0";

    const contentContainer = document.querySelector(
      ".container.content"
    ) as HTMLElement;
    const splitViewContainer = document.createElement("div");
    splitViewContainer.style.display = "flex";

    const leftSection = document.createElement("div");
    leftSection.style.flex = "1";
    leftSection.style.maxHeight = "100vh";
    leftSection.style.overflowY = "auto";
    leftSection.style.paddingRight = "10px";

    if (problemHTML != null) {
      setProblemHTMLStyles(problemHTML);
      leftSection.appendChild(problemHTML);
    } else {
      leftSection.innerHTML = "<h1>문제를 불러오는데 실패했습니다.</h1>";
    }

    const rightSection = document.querySelector(
      "form.submit-form"
    ) as HTMLElement;
    rightSection.style.flex = "1";
    rightSection.style.padding = "10px";

    splitViewContainer.appendChild(leftSection);
    splitViewContainer.appendChild(rightSection);

    if (contentContainer) {
      contentContainer.innerHTML = "";
      contentContainer.appendChild(problemMenu);
      contentContainer.appendChild(splitViewContainer);
      contentContainer.style.width = "100%";
    }
  };

  const fetchProblemDetail = async (problemId: string | null) => {
    console.log(problemId);
    return fetch(`https://www.acmicpc.net/problem/${problemId}`)
      .then((res) => res.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.querySelector(".container.content .row") as HTMLElement;
      });
  };

  const checkActiveState = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("solve") === "true") {
      document
        .querySelectorAll("ul.problem-menu li.active")
        .forEach((activeItem) => {
          activeItem.classList.remove("active");
        });

      const submitButton = document.querySelector(
        'ul.problem-menu li a[href*="/submit"]'
      );
      if (submitButton) {
        const solveButton = submitButton.closest("li")?.nextSibling;
        if (solveButton && solveButton instanceof HTMLLIElement) {
          solveButton.classList.add("active");
        }
      }

      const problemId = getProblemId();
      const problemHTML = await fetchProblemDetail(problemId);
      createSplitViewLayout(problemHTML);
    }
  };

  window.addEventListener("load", checkActiveState);
}
