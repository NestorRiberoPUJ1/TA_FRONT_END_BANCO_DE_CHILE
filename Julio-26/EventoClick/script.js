


console.log("INCIANDO SCRIPT");


let agregarBtn = document.getElementById("agregarBtn");


agregarBtn.addEventListener("click", (evento) => {
    evento.target.remove();
})


function login(elemento) {
    console.log("Inicio de sesion", elemento);
    elemento.innerHTML = "Cerrar Sesion";
    elemento.classList.remove("bg-light");
    elemento.classList.add("bg-dark");
}

function darLike(elemento) {
    let animal = elemento.parentElement.children[0].innerHTML;
    let likeElement = elemento.children[0];
    let likes=elemento.children[0].innerHTML;
    likes++;
    likeElement.innerHTML = likes;
    alert("Diste like a " + animal);
}