
//carrusel fondos del juego
const container = document.querySelector('.container-carrusel');
const previous  = document.querySelector('.previous');
const next      = document.querySelector('.next');

// Añado un listener a cada botón que servirá para trasladarse por el carrusel
// el evento que desencadena el listener aplicará un transform translate en el eje x en el div contenedor

previous.addEventListener('click', ()=>{
  let translate = container.style.transform;
  if(translate == 'translateX(0%)')
    return false
  else if (translate == 'translateX(-33.333%)') {
    container.style.transform = `translateX(0%)`;
    previous.style.color= "transparent"
  }
  else if(translate == 'translateX(-66.666%)') {
    container.style.transform = `translateX(-33.333%)`;
    next.style.color= "#d9eee6";

  }
  let audio = document.getElementById("down");
  audio.play();
})
next.addEventListener('click', ()=>{
  let translate = container.style.transform;
  if(translate == 'translateX(0%)'){
    container.style.transform = `translateX(-33.333%)`;
    next.style.color= "#d9eee6"
    previous.style.color="#d9eee6"
  }
  else if (translate == 'translateX(-33.333%)') {
    container.style.transform = `translateX(-66.666%)`;
    next.style.color= "transparent"
  }
  else if(translate == 'translateX(-66.666%)')
    return false;

  let audio = document.getElementById("up");
  audio.play();
})
