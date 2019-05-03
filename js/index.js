const h1_id = document.querySelector("#h1_id");
const div_class = document.querySelector(".div_class");
const form_id = document.querySelector("#form_id");
const form_input = form_id.querySelector("input");
const ul_id = document.querySelector("#ul_id");

const LOCAL_STORAGE = "local_storage";

const MOUSE_CLICKED_CLASS = "mouse-clicked";
const MOUSE_ENTERED_CLASS = "mouse-entered";
const MOUSE_OUT_CLASS = "mouse-out";

let myArray = [];
let myObjArray = [];

function myListner1(){
    const hasClass1 = h1_id.classList.contains(MOUSE_CLICKED_CLASS);
    const hasClass2 = h1_id.classList.contains(MOUSE_ENTERED_CLASS);

    if(hasClass1){
        if(hasClass2){
            h1_id.classList.remove(MOUSE_ENTERED_CLASS);
        }
        h1_id.classList.remove(MOUSE_CLICKED_CLASS);
    }else{
        h1_id.classList.add(MOUSE_CLICKED_CLASS);
    }
}

function myListner2(){
    h1_id.classList.toggle(MOUSE_ENTERED_CLASS);
}

function saveObject(){
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(myObjArray))
}

function goodToDo(event){
    const btn = event.target;
    btn.value = parseInt(btn.value)+1;

    myObjArray.forEach(function(a){
        if(a.id === btn.id){
            a.value = btn.value;
        }
    });

    console.log(btn);
    btn.innerText = "";
    btn.innerText = "👍"+btn.value; 
    console.log(myObjArray);
    saveObject();
}

function drawSomething(text, value){
    
    const li = document.createElement("li");
    const goodBtn = document.createElement("button");
    
    const myId = myObjArray.length + 1;

    goodBtn.innerText = "👍";
    if(value != 0){
        goodBtn.innerText += value;
    }
    goodBtn.id = `btn${myId}`;
    goodBtn.value = value;

    goodBtn.addEventListener("click", goodToDo);

    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(goodBtn);
    li.appendChild(span);
    
    li.id = myId;

    ul_id.appendChild(li);
    const myObj = {
        text: text,
        value : goodBtn.value,
        id: goodBtn.id
    }
    myObjArray.push(myObj);
    saveObject();
}

function submitListner(event){
    event.preventDefault();
    const currentValue = form_input.value;
    const value = 0;
    drawSomething(currentValue, value);
    form_input.value = "";
};

function loadList(){
    const loaded = localStorage.getItem(LOCAL_STORAGE);
    if(loaded !== null){  
      const parseLoaded = JSON.parse(loaded);
      parseLoaded.forEach(function(a){
        drawSomething(a.text, a.value)
      });
    }
}

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
  window.addEventListener("click", myListner1);
  h1_id.addEventListener("mouseenter", myListner2);

  loadList();
  form_id.addEventListener("submit", submitListner);
//   useAjax();s
//   useFetch();
}

init();