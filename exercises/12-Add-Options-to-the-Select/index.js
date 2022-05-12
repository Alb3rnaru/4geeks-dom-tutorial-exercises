let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let select = document.querySelector("#mySelect");
for (i=0; i<countries.length; i++){
    let addingCountry = document.createElement("option");
    addingCountry.value = i;
    console.log(addingCountry);
    addingCountry.innerHTML = countries[i];
    select.appendChild(addingCountry);
}

select.addEventListener('change', (event) => {
    alert(countries[event.target.value]);
})
