var mbtn = document.querySelector(".hotel-order-button");
var enter = document.querySelector(".hotel-order-form");
mbtn.addEventListener("click", function(evt){
evt.preventDefault();
  if (enter.classList.contains("form-show")){
    enter.classList.remove("form-show");

  }
  else {
    enter.classList.add("form-show");

  }

});
