window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
 // Evento que cuando se aprete en mi h2, cambie el mensaje de muestra de la web (EN MI PÁG DE INICIO)

const h2 = document.querySelector("h2");

const evento = "click";

h2.addEventListener(evento, sobreHDOS);

function sobreHDOS(){
    const div = document.querySelector("#bnsMts");
    div.innerHTML = "NUNCA DEJAMOS DE EXPERIMENTAR";
}

// Uso el evento de mousemove, para pasar por arriba de mi titulo de la pag y que me de un mensaje automaticamente 
const h1 = document.querySelector("h1");

const eveTos = "mousemove";

/* h1.addEventListener(eveTos, sobreTitulo);

function sobreTitulo(){
	const div = document.querySelector("#ttS");
	div.innerHTML = "DEL CAMPO ARGENTINO AL MUNDO";
	HTMLHeadingElement.sobreTitulo;
} */

// Modifico el DOM cuando envio el formulario

/* const envio = document.querySelector("#commBut");

const presiono = "click";

envio.addEventListener(presiono, modifico);

function modifico(){
    const div = document.querySelector("form.tuOpi");
    div.innerHTML = "<h1>YA ESTAMOS ANALIZANDO TU COMENTARIO PARA PODER MEJORAR, GRACIAS!</h1>";
} */


// AGREGO AL LS MIS USUARIOS Y SUS COMENTARIOS Y GUSTOS

class usuariosComm {
    constructor (mail, gusto, comentario){
        this.mail = mail;
        this.gusto = gusto;
        this.comentario = comentario;
        
    }
}

const personasD = [];

let bottEnv = document.getElementById("commBut");
bottEnv.onclick = function bottEnv1(){
    let correo1 = document.getElementById("exampleFormControlInput1").value;
    let bebida1 = document.getElementById("exampleFormControlSelect1").value;
    let commentario1 = document.getElementById("exampleFormControlTextarea1").value;

    const usuario1 = new usuariosComm (correo1, bebida1, commentario1);
personasD.push(usuario1);
console.log(personasD);
const guardPersonas = JSON.stringify(personasD);
localStorage.setItem(`PJ`, guardPersonas);
}



