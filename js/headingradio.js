(function(){

let q01 = document.getElementById("q01js");
let a01 = document.getElementById("a01js");
let i01 = document.getElementById("i01js");
i01.innerHTML = "&#8853; "; // default is plus
q01.addEventListener("click", function(){
  makeChange(a01, i01);}, false);

let q02 = document.getElementById("q02js");
let a02 = document.getElementById("a02js");
let i02 = document.getElementById("i02js");
i02.innerHTML = "&#8853; "; // default is plus
q02.addEventListener("click", function(){
  makeChange(a02, i02);}, false);

let q03 = document.getElementById("q03js");
let a03 = document.getElementById("a03js");
let i03 = document.getElementById("i03js");
i03.innerHTML = "&#8853; "; // default is plus
q03.addEventListener("click", function(){
  makeChange(a03, i03);}, false);

let toggle = false; // default is hidden
function makeChange(answer, icon){
  if (toggle) {
    toggle = false;
    answer.classList.remove("show");
    icon.innerHTML = "&#8853; ";
  } 
  else {
    toggle = true;
    answer.classList.add("show");
    icon.innerHTML = "&#8854; ";
  }
};

})();