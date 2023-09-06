function toggleMode(){
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

   if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/assets/avatar-light.png");
    img.setAttribute("alt", "Foto do perfil de Danilo Pinheiro, no light mode");
   } else {
    img.setAttribute("src", "./assets/assets/avatar1.png");
    img.setAttribute("alt", "Foto do perfil de Danilo Pinheiro, no dark mode");
   }

}

