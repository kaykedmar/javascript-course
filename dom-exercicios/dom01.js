function navega(elemento) { 
  const menuListas = document.querySelectorAll('.menus-js');
  menuListas.forEach(li => { 
    if (li === elemento) { 
      li.classList.toggle("css-mod"); 
    } else { 
      li.classList.remove('css-mod');
    }
  });
}