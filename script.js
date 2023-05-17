const textArea = document.querySelector ("#cuadro");
const mensaje = document.querySelector ("#mensaje");
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

// Obtener el botón de copiar
const botonCopiar = document.querySelector("#btn-copiar");

// Agregar un evento de clic al botón
botonCopiar.addEventListener("click", () => {
  // Seleccionar el texto en el área de mensaje
  mensaje.select();
  mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el texto al portapapeles
  navigator.clipboard.writeText(mensaje.value)
    .then(() => {
      // Mensaje de retroalimentación
      alert("¡Texto copiado al portapapeles!");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
});



function btnEncriptar() {
   
    const textoEncriptado = Encriptar(textArea.value);
    mensaje.value =textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";
   
    const placeholder = document.querySelector(".mensaje-placeholder");
    placeholder.classList.add("hide-placeholder");
    mensaje.style.fontSize = "23px";
}


function btnDesencriptar() {
   
    const textoEncriptado = Desencriptar(textArea.value);
    mensaje.value =textoEncriptado;
    textArea.value="";

}

function Encriptar (stringEncriptada) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes (matrizCodigo[i][0])) {

            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        } 
    }

    return stringEncriptada

}

function  Desencriptar (stringDesencriptada) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes (matrizCodigo[i][1])) {

            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        } 
    }

    return stringDesencriptada

}