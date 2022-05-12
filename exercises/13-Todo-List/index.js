// Your code here
// document.getElementById("addToDo").keypress = function (event) {
//     if (event.keyCode === 13){
//     let toDo = document.getElementById("addToDo").value;
//     let li = '<li> <span><i class="fa fa-trash"></i></span>' + toDo + "</li>";
//     console.log(li);    
//     document.querySelector("#myList").appendChild(li);
//     }
// };

// const elem = document.getElementById("addToDo");


var closebtns = document.getElementsByClassName("fa fa-trash");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.parentElement.remove();
  });
}

const addingToDo = document.getElementById("addToDo");

addingToDo.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) { 
        let toDo = addingToDo.value;
        let li = document.createElement("li");
        li.innerHTML = '<li><span><i class="fa fa-trash"></i></span>' + toDo + '</li>';
        //console.log(li);
        addingToDo.value = "";
        let ul = document.getElementsByTagName("ul");
        //console.log(ul[0]);
        let ul1 = ul[0];
        //console.log(ul1);
        ul1.appendChild(li);
        var closebtns = document.getElementsByClassName("fa fa-trash");
        var i;
        for (i = 0; i < closebtns.length; i++) {
          closebtns[i].addEventListener("click", function() {
            this.parentElement.parentElement.remove();
          });
        }
    }
});

let addFourthElement = document.createElement("li");
	addFourthElement.innerHTML = "Fourth element";
	let list = document.querySelector("#myList");
	list.appendChild(addFourthElement);