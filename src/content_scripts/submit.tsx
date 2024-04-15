export default function customSubmitPage(): void {
  const createSplitViewLayout = (): void => {
    const problemMenu = document.querySelector(
      "ul.problem-menu"
    ) as HTMLElement;
    problemMenu.style.cssText = `position: sticky;`;

    const contentContainer = document.querySelector(
      ".container.content"
    ) as HTMLElement;
    const splitViewContainer = document.createElement("div");
    splitViewContainer.style.display = "flex";
    splitViewContainer.style.marginTop = "20px";

    const leftSection = document.createElement("div");
    leftSection.style.flex = "1";
    leftSection.style.maxHeight = "100vh";
    leftSection.style.overflowY = "auto";
    leftSection.style.paddingRight = "10px";
    leftSection.innerHTML = `
    <div class="row" style="margin-right: 0px; margin-left: 0px">
  <div class="col-md-12">
    <div id="result_log"></div>
  </div>
  <div class="col-md-12">
    <div class="page-header">
      <h1>
        <span id="problem_title">A+B</span>
        <span class="problem-label problem-label-ac">성공</span
        ><span class="problem-label problem-label-multilang">다국어</span>
        <div class="btn-group pull-right problem-button">
          <button
            class="btn btn-default"
            type="button"
            id="favorite_button"
            data-favorite="0"
          >
            <span
              class="glyphicon glyphicon-star-empty"
              id="favorite_image"
            ></span>
          </button>
          <button
            type="button"
            class="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            id="lang-select-button"
          >
            <span class="lang-select-text"> 한국어 </span>
            &nbsp;
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#" data-language-id="0" class="language-select-link">
                <span class="lang-text">한국어</span>
                <span class="label label-default problem-label">원문</span>
              </a>
            </li>
            <li>
              <a href="#" data-language-id="1" class="language-select-link">
                <span class="lang-text">영어</span>
              </a>
            </li>
          </ul>
        </div>
      </h1>
    </div>
  </div>
  <div class="col-md-12">
    <div class="table-responsive">
      <table class="table" id="problem-info">
        <thead>
          <tr>
            <th style="width: 16%">시간 제한</th>
            <th style="width: 16%">메모리 제한</th>
            <th style="width: 17%">제출</th>
            <th style="width: 17%">정답</th>
            <th style="width: 17%">맞힌 사람</th>
            <th style="width: 17%">정답 비율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2 초</td>
            <td>128 MB</td>
            <td>1075900</td>
            <td>423976</td>
            <td>292586</td>
            <td>39.126%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div id="problem-body" class="">
    <div class="col-md-12">
      <section id="description" class="problem-section">
        <div class="headline">
          <h2>문제</h2>
        </div>
        <div id="problem_description" class="problem-text">
          <p>
            두 정수 A와 B를 입력받은 다음,&nbsp;A+B를 출력하는 프로그램을
            작성하시오.
          </p>
        </div>
      </section>
    </div>
    <div class="col-md-12">
      <section id="input" class="problem-section">
        <div class="headline">
          <h2>입력</h2>
        </div>
        <div id="problem_input" class="problem-text">
          <p>첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10)</p>
        </div>
      </section>
    </div>

    <div class="col-md-12">
      <section id="output" class="problem-section">
        <div class="headline">
          <h2>출력</h2>
        </div>
        <div id="problem_output" class="problem-text">
          <p>첫째 줄에 A+B를 출력한다.</p>
        </div>
      </section>
    </div>
    <div class="col-md-12">
      <section id="limit" style="display: none" class="problem-section">
        <div class="headline">
          <h2>제한</h2>
        </div>
        <div id="problem_limit" class="problem-text"></div>
      </section>
    </div>
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <section id="sampleinput1">
            <div class="headline">
              <h2>
                예제 입력 1
                <button
                  type="button"
                  class="btn btn-link copy-button"
                  style="padding: 0px"
                  data-clipboard-target="#sample-input-1"
                >
                  복사
                </button>
              </h2>
            </div>
            <pre class="sampledata" id="sample-input-1">
1 2
</pre
            >
          </section>
        </div>
        <div class="col-md-6">
          <section id="sampleoutput1">
            <div class="headline">
              <h2>
                예제 출력 1
                <button
                  type="button"
                  class="btn btn-link copy-button"
                  style="padding: 0px"
                  data-clipboard-target="#sample-output-1"
                >
                  복사
                </button>
              </h2>
            </div>
            <pre class="sampledata" id="sample-output-1">
3
</pre
            >
          </section>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <section id="hint" class="problem-section">
        <div class="headline">
          <h2>힌트</h2>
        </div>
        <div id="problem_hint" class="problem-text">
          <p>
            <a href="https://www.acmicpc.net/help/language">여기</a>를 누르면
            1000번 예제 소스를 볼 수 있습니다.
          </p>
        </div>
      </section>
    </div>
    <div style="display: none">
      <div id="problem-lang-base64">
        W3sicHJvYmxlbV9pZCI6IjEwMDAiLCJwcm9ibGVtX2xhbmciOiIwIiwidGl0bGUiOiJBK0IiLCJkZXNjcmlwdGlvbiI6IjxwPlx1YjQ1MCBcdWM4MTVcdWMyMTggQVx1YzY0MCBCXHViOTdjIFx1Yzc4NVx1YjgyNVx1YmMxYlx1Yzc0MCBcdWIyZTRcdWM3NGMsJm5ic3A7QStCXHViOTdjIFx1Y2Q5Y1x1YjgyNVx1ZDU1OFx1YjI5NCBcdWQ1MDRcdWI4NWNcdWFkZjhcdWI3YThcdWM3NDQgXHVjNzkxXHVjMTMxXHVkNTU4XHVjMmRjXHVjNjI0LjxcL3A+XHJcbiIsImlucHV0IjoiPHA+XHVjY2FiXHVjOWY4IFx1YzkwNFx1YzVkMCBBXHVjNjQwIEJcdWFjMDAgXHVjOGZjXHVjNWI0XHVjOWM0XHViMmU0LiAoMCAmbHQ7IEEsIEIgJmx0OyAxMCk8XC9wPlxyXG4iLCJvdXRwdXQiOiI8cD5cdWNjYWJcdWM5ZjggXHVjOTA0XHVjNWQwIEErQlx1Yjk3YyBcdWNkOWNcdWI4MjVcdWQ1NWNcdWIyZTQuPFwvcD5cclxuIiwiaGludCI6IjxwPjxhIGhyZWY9XCJodHRwczpcL1wvd3d3LmFjbWljcGMubmV0XC9oZWxwXC9sYW5ndWFnZVwiPlx1YzVlY1x1YWUzMDxcL2E+XHViOTdjIFx1YjIwNFx1Yjk3NFx1YmE3NCAxMDAwXHViYzg4IFx1YzYwOFx1YzgxYyBcdWMxOGNcdWMyYTRcdWI5N2MgXHViY2ZjIFx1YzIxOCBcdWM3ODhcdWMyYjVcdWIyYzhcdWIyZTQuPFwvcD5cclxuIiwib3JpZ2luYWwiOiIxIiwiaHRtbF90aXRsZSI6IjAiLCJwcm9ibGVtX2xhbmdfdGNvZGUiOiJLb3JlYW4ifSx7InByb2JsZW1faWQiOiIxMDAwIiwicHJvYmxlbV9sYW5nIjoiMSIsInRpdGxlIjoiQStCIiwiZGVzY3JpcHRpb24iOiI8cD5HaXZlbiB0d28gaW50ZWdlcnMgQSBhbmQgQiwgY2FsY3VsYXRlIHRoZWlyIHN1bS48XC9wPlxyXG4iLCJpbnB1dCI6IjxwPlRoZSBmaXJzdCBsaW5lIGNvbnRhaW5zJm5ic3A7dHdvIGludGVnZXJzIEEgYW5kIEIuICgwICZsdDsgQSwgQiAmbHQ7IDEwKTxcL3A+XHJcbiIsIm91dHB1dCI6IjxwPk91dHB1dCBvbmUgbGluZSBvZiBvbmUgaW50ZWdlciwgQStCLjxcL3A+XHJcbiIsImhpbnQiOiIiLCJvcmlnaW5hbCI6IjAiLCJodG1sX3RpdGxlIjoiMCIsInByb2JsZW1fbGFuZ190Y29kZSI6IkVuZ2xpc2gifV0=
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <section id="source">
      <div class="headline"><h2>출처</h2></div>
      <ul>
        <li>문제를 만든 사람:&nbsp;<a href="/user/baekjoon">baekjoon</a></li>
        <li>
          빠진 조건을 찾은 사람:&nbsp;<a href="/user/djm03178">djm03178</a>
        </li>
        <li>데이터를 추가한 사람:&nbsp;<a href="/user/doju">doju</a></li>
      </ul>
    </section>
  </div>
  <div class="col-md-12">
    <section id="problem_association">
      <div class="headline">
        <h2>비슷한 문제</h2>
      </div>

      <ul>
        <li><a href="/problem/1001">1001번. A-B</a></li>
        <li><a href="/problem/1008">1008번. A/B</a></li>
        <li><a href="/problem/2558">2558번. A+B - 2</a></li>
        <li><a href="/problem/10950">10950번. A+B - 3</a></li>
        <li><a href="/problem/10951">10951번. A+B - 4</a></li>
        <li><a href="/problem/10952">10952번. A+B - 5</a></li>
        <li><a href="/problem/10953">10953번. A+B - 6</a></li>
        <li><a href="/problem/10998">10998번. A×B</a></li>
        <li><a href="/problem/11021">11021번. A+B - 7</a></li>
        <li><a href="/problem/11022">11022번. A+B - 8</a></li>
        <li><a href="/problem/15740">15740번. A+B - 9</a></li>
        <li><a href="/problem/15792">15792번. A/B - 2</a></li>
      </ul>
    </section>
  </div>
  <div class="col-md-12">
    <section id="problem_tags">
      <div class="headline">
        <h2>알고리즘 분류</h2>
      </div>
      <ul class="spoiler-list">
        <li>
          <a href="/problem/tag/124" class="spoiler-link">수학</a>
        </li>
        <li>
          <a href="/problem/tag/102" class="spoiler-link">구현</a>
        </li>
        <li>
          <a href="/problem/tag/121" class="spoiler-link">사칙연산</a>
        </li>
      </ul>
    </section>
  </div>
  <div class="col-md-12">
    <section id="problem_memo">
      <div class="headline">
        <h2>메모</h2>
      </div>
      <div id="problem-memo-view" class="problem-text"></div>
      <div id="problem-memo-edit" style="display: none">
        <textarea
          name="memo-content"
          id="memo-content"
          class="form-control"
          style="display: none"
        ></textarea>
      </div>
      <p class="lead text-center no-print" id="problem-memo-button">
        <a href="#" class="problem-memo-write">메모 작성하기</a>
      </p>
      <p
        class="lead text-center no-print"
        id="problem-memo-save-div"
        style="display: none"
      >
        <button
          type="button"
          class="btn btn-primary btn-lg"
          id="problem-memo-save"
          data-loading-text="작성 중..."
        >
          저장</button
        >&nbsp;<button
          type="button"
          class="btn btn-lg"
          id="problem-memo-cancel"
        >
          취소
        </button>
      </p>
    </section>
  </div>
</div>
    `;

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
      // contentContainer.style.margin = "10px";
      contentContainer.style.width = "100%";
    }
  };

  const checkActiveState = () => {
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

      createSplitViewLayout();
    }
  };

  window.addEventListener("load", checkActiveState);
}
