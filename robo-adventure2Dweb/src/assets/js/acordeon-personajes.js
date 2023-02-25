
const bt_personajes = document.getElementById('acordeon_personajes');
const contentPersonajes = document.querySelector('.content-personajes');


bt_personajes.addEventListener('click', () => {
  contentPersonajes.classList.toggle('activo-acordeon')
})