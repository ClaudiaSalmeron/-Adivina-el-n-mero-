//El juego selecciona un núm. al azar para que adivines
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0
//Esta acción se va a ejecutar cuando se toque el botón chequear
function chequearResultado(){
intentos ++
intento.textContent = intentos
let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado >100 || isNaN(numeroIngresado)){
        mensaje.textContent ='Por favor introduce un número válido entre 1 y 100'
        mensaje.styleSheets.color = 'red';
        return
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent ='¡Felicitaciones! ¡Has adivinado el número!';
        mensaje.styleSheets.color = 'green';
        numeroEntrada.disabbled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent ='¡Más alto! El número es mayor al que dijiste.';
        mensaje.styleSheets.color = 'red'; 
    }else{
        mensaje.textContent ='¡Más bajo! El número es menor al que dijiste';
        mensaje.styleSheets.color = 'red'; 

    }
}