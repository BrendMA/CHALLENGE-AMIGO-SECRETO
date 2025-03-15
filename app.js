// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

 
const inputAmigo = document.getElementById ("amigo")
const listaAmigos = []; 
const ulListaAmigos = document.getElementById ("listaAmigos"); 
const ulResultado = document.getElementById("resultado"); 

function agregarAmigo() {
    
    if (inputAmigo.value === "") {
        alert("Por favor ingresa un nombre");

    }

    listaAmigos.push(inputAmigo.value);
    console.log(listaAmigos);

    // ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`; 

}; 

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista. Agrega al menos un nombre antes de sortear.");
        return;
    }

const random= Math.floor((Math.random() * listaAmigos.length)); 
const amigoSecreto = listaAmigos[random]; 
ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; 
} 





