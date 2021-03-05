var modalBtn = document.querySelector(".table-task");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");


modalBtn.addEventListener("click", function(){
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener("click", function(){
    modalBg.classList.remove('bg-active');
});