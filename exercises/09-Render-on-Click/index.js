let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let yellowDiv = document.createElement("div");
	yellowDiv.innerHTML = "Hello World";
	yellowDiv.style.background = "yellow";
	// let bodyHTML = document.getElementById('#body');
	// console.log(bodyHTML);
	document.body.appendChild(yellowDiv);
});