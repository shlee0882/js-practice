# js-practice
- javascript 기본 연습
- const, let, local storage를 활용해 함수형 자바스크립트 구조로 생성
- js를 활용해 dom구조를 생성 변경할때

### 예전방식

```js
var markUp += "<li>";
             +=   "<span></span>";
             += "</ll>";

$("#ul_id").append(markUp);
```

### 바꾼방식

```js
const ul_id = document.querySelector("#ul_id");
const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
ul_id.appendChild(li); 
```

### 바뀐 함수 호출방식

```js

const LOCAL_STORAGE = "local_storage";
let myObjArray = [];

function saveObject(){
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(myObjArray))
}

function drawSomething(text){
    const id = myObjArray.length + 1;
    const myObj = {
        text: text,
        id: id
    }
    myObjArray.push(myObj);
    saveObject();
}

function submitListner(event){
    event.preventDefault();
    const currentValue = form_input.value;
    drawSomething(currentValue);
    form_input.value = "";
};

function init(){
  form_id.addEventListener("submit", submitListner);
}

init();

// 자바스크립트 함수형 프로그래밍(down to top) 
// init() -> submitListner(event) -> drawSomething(text) -> saveObject()
```

### ajax, fetch 방식
```js

// ajax 사용
function useAjax(){
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        url : 'http://13.124.203.134/burgers',
        success : function(result) {
            console.log("성공", result);
        },
        error : function(error) {
            console.log("에러", error);
        }
    });
}

// fetch 사용
function useFetch(){
    fetch(`http://13.124.203.134/burgers`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
    });
}

function init(){
  useAjax();
  useFetch();
}

init();
// 두 방식 모두 결과 같음.
```
