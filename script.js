const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  let id = Math.floor(Math.random() * 150) + 1;
  console.log("id GENERADO: " + id);
};
btn.addEventListener("click", getPokeData);