var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");


modalBtn.addEventListener("click", function(){
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener("click", function(){
    modalBg.classList.remove('bg-active');
});


var modalBtnSecond = document.querySelector(".modal-second-btn");
var modalBgSecond = document.querySelector(".second-modal");
var modalCloseSecond = document.querySelector(".modal-close-second");


modalBtnSecond.addEventListener("click", function(){
    modalBgSecond.classList.add('bg-second-active');
});

modalCloseSecond.addEventListener("click", function(){
    modalBgSecond.classList.remove('bg-second-active');
});

var modalBtnThird = document.querySelector(".modal-third-btn");
var modalBgThird = document.querySelector(".third-modal");
var modalCloseThird = document.querySelector(".modal-close-third");


modalBtnThird.addEventListener("click", function(){
    modalBgThird.classList.add('bg-third-active');
});

modalCloseThird.addEventListener("click", function(){
    modalBgThird.classList.remove('bg-third-active');
});

