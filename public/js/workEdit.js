const fille = document.querySelectorAll(".fill");
const lists = document.querySelectorAll(".to-do-section");

let draggedItem = null;

for (let i = 0; i < fille.length; i++) {
  const item = fille[i];

  item.addEventListener("dragstart", function () {
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 0);
  });
  item.addEventListener("dragend", function () {
    setTimeout(function () {
      draggedItem.style.display = "grid";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
    });
    //list.addEventListener('dragleave', dragLeave);
    list.addEventListener("drop", function (e) {
      this.append(draggedItem);
    });
  }
}

/*for(const fill of fille) {
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
};*/

//loop through empties
/*for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    //empty.addEventListener('dragleave', dragLeave);
    //empty.addEventListener('drop', dragDrop);
}
*/

// drag functions
/*function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}*/

/*function dragEnd() {
    this.className = 'first-table-task';
}*/

/*function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}*/

/*
function dragStart() {
    draggedItem = this;
    setTimeout(() => (this.className = 'invisible'), 0);
};
*/

//function dragEnd() {
//setTimeout(function(){
//draggedItem./*className = 'first-table-task'*/style.display = 'block';
//draggedItem = null;
//}, 0);
//}

/*
// drag empty functions
function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    //this.className += ' hovered';
}
*/
/*function dragLeave() {
    this.className = 'empty';
}*/

/*function dragDrop() {
    //this.className = 'empty';
    this.append(draggedItem);
}*/
