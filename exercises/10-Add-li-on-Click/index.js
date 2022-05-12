let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let addFourthElement = document.createElement("li");
	addFourthElement.innerHTML = "Fourth element";
	let list = document.querySelector("#myList");
	list.appendChild(addFourthElement);
});
