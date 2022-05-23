//Selecciona la etiqueta nav y el icono del menú hamburguesa
nav = document.querySelector('nav')
const iconButton = document.querySelector('.icon');
//Al hacer click en el botón del menú hamburguesa, a la clase navBar, se le añade responsive. Quedando en class="navBar responsive" para que se aplique el css responsive
iconButton.addEventListener('click', (e) => {
    if (nav.className === "navBar"){
        nav.className += " responsive";
    } else {
        nav.className = "navBar";
    }
});