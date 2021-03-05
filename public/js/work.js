var workModalBtn = document.querySelector(".work-modal-btn");
var workModalBg = document.querySelector(".work-modal");
var workModal = document.querySelector(".work-modal-close");


workModalBtn.addEventListener("click", function(){
    workModalBg.classList.add('work-bg-active');
});

workModal.addEventListener("click", function(){
    workModalBg.classList.remove('work-bg-active');
});