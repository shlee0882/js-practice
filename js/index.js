const h1_id = document.querySelector("#h1_id");
const div_class = document.querySelector(".div_class");

console.log(h1_id);
console.dir(h1_id);

const MOUSE_CLICKED_CLASS = "mouse-clicked";
const MOUSE_ENTERED_CLASS = "mouse-entered";
const MOUSE_OUT_CLASS = "mouse-out";

let myArray = [];

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

    const li = document.createElement("li");
    const button = document.createElement("button");
    const newId = myArray.length + 1;
    button.innerText = "👍";
    button.className = "button_class";
    const span = document.createElement("span");
    li.appendChild(span);
    li.appendChild(button);
    div_class.appendChild(li);


}

function myListner2(){
    h1_id.classList.toggle(MOUSE_ENTERED_CLASS);
}



function init(){
  window.addEventListener("click", myListner1);
  h1_id.addEventListener("mouseenter", myListner2);
  
}

init();