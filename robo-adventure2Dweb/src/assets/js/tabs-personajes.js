

const button = document.querySelectorAll('.buttonpj');
const bloque = document.querySelectorAll('.bloque');

//creo un evento para cada botón
  //este evento quitará la clase activa a todos los botones y a todos los bloques
  //añado la clase activa al botón clicado y al bloque correspondiente

button.forEach((b, index) => {
  b.addEventListener('click', () => {

    //recorro los botones y los bloques para quitarles la clase activa
    button.forEach((b, i) =>{
      b.classList.remove('activopj')
      bloque[i].classList.remove('activobloque')
    })

    b.classList.add('activopj')
    bloque[index].classList.add('activobloque')
  })
})
