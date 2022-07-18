const menuItems = document.querySelectorAll  (".menu-item");/* por que doble comillas aca y abajo simples????*/
const menuBtn = document.querySelector('#menubars');
    /* queryselector es el metodo para seleccionar a 1 elemento en el html, 1 solo */

menuBtn.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-active');
});

menuItems.forEach(function(item) {

    item.addEventListener('click', function() {

      document.body.classList.remove('mobile-menu-active');/* esta linea me permite hacer que el menu se cierre solo cuando clickeo en una opcion  */

      const currentItem = document.querySelector('.active');
      currentItem.classList.remove('active');
      this.classList.add('active');
    });
});

