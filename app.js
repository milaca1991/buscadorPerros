const form = document.querySelector("form");


form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const inputRaza = document.querySelector("#input-raza");

    const validacion = validarTexto(inputRaza.value);

    if (validacion) {
        buscarPerro(inputRaza.value);
    } else {
        alert("Búsqueda incorrecta, reintente.")
    }

    form.reset();
});





/* -------------------------------------------------------------------------- */
/*                                 CONSIGNA 1                                 */
/* -------------------------------------------------------------------------- */
/*
CONSIGNA: Validando el campo. Crear una funcion que reciba el input del usuario
y realice las siguientes tareas:

--> No se deben contar los espacios extra al principio o final
--> Validar que el texto tenga al menos 3 caracteres

✅-> Si pasa las validaciones la función debe devolver TRUE
⛔-> Si NO pasa las validaciones la función debe devolver FALSE
*/
function validarTexto(texto) {

    texto = texto.trim(); //quita espacios

        if (texto.length >= 3) {
          // Si cumple los requisitos, devolvemos true
          return true;
        } else {
          // Si no cumple los requisitos, devolvemos false
          return false;
        }
      }

    ;



/* -------------------------------------------------------------------------- */
/*                                 CONSIGNA 2                                 */
/* -------------------------------------------------------------------------- */
/*
CONSIGNA: Desarrollar la función que realice un fetch a la API
de Dog API y obtenga una imagen random de perro según la raza buscada.
Recibe por parametros la raza, y debe interpolar la raza en la Endpoit mencionado abajo.

MÉTODO: GET
ENDPOINT: https://dog.ceo/api/breed/{{raza}}/images/random
RESULTADO: Nos devuelve un objeto con la información.

    Dentro del <div> con la clase "tarjeta" debemos insertar:
    ✅-> Si la raza existe, una imagen con la url que nos llega.
    ⛔-> Si NO existe la raza, un párrafo que diga "Raza no encontrada"
// // // *//*function buscarPerro(raza) {*/

//      const endpoint = `https://dog.ceo/api/breed/${raza}/images/random` ;

//   // Realizar el fetch a la API
//   fetch(endpoint)
//     .then((response) => response.json())
//     .then((data) => {

//       const raza = data.message;
    
      

//       mostrarResultado(raza);
      
//     })
//     .catch((error) => {
      
//       mostrarResultado(null);
//     });
// }
;


function buscarPerro(raza) {

     const endpoint = `https://dog.ceo/api/breed/${raza}/images/random` ;

  // Realizar el fetch a la API
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {

      const raza = data.message;
    
      

      mostrarResultado(raza);
      
    })
    .catch((error) => {
      
      mostrarResultado(null);
    });
}
;





function mostrarResultado(raza) {
    const tarjeta = document.querySelector(".tarjeta");
console.log(raza !== "Breed not found (master breed does not exist)" );

    if (raza !== "Breed not found (master breed does not exist)" ) {
      // Si la raza existe, se crea un elemento img y se añade a la tarjeta
  
      const imagen = document.createElement("img");
      imagen.src = raza;
      tarjeta.appendChild(imagen);
    } else {
      // Si la raza no existe, se crea un elemento p y se añade a la tarjeta
      const parrafo = document.createElement("p");
      parrafo.textContent = "Raza no encontrada";
      tarjeta.appendChild(parrafo);
    }
  }