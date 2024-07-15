//CONTADOR
const contadores = document.querySelectorAll(".contador .valor");
const container = document.querySelector(".contadors");
let activated = false;

// Función para actualizar los contadores
function updateCount(contador, target, suffix) {
    let count = 0;
    
    const interval = setInterval(() => {
      count++;
      contador.innerText = `${count}${suffix}`;
      if (count >= target) {
        clearInterval(interval);
        contador.innerText = `${target}${suffix}`;
      }
    }, 10);
  }
  
  // Función de callback para el IntersectionObserver
  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !activated) {
        contadores.forEach(contador => {
          const target = parseInt(contador.getAttribute("data-count"));
          const suffix = contador.getAttribute("data-suffix") || ""; // Obtener el sufijo o usar una cadena vacía si no hay sufijo
          updateCount(contador, target, suffix);
        });
        activated = true;
      } else if (!entry.isIntersecting) {
        contadores.forEach(contador => {
          contador.innerText = 0;
        });
        activated = false;
      }
    });
  }
  
  // Crear un IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  // Observar el contenedor de los contadores
  observer.observe(container);


//IMAGEN PROTOTIPO
  // Get the modal
var lightbox = document.getElementById("lightbox");

// Get the image and insert it inside the lightbox - use its "alt" text as a caption
var img = document.getElementById("prototipo-img");
var lightboxImg = document.getElementById("lightbox-img");

img.onclick = function(){
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
}

// Get the <span> element that closes the lightbox
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the lightbox
span.onclick = function() { 
    lightbox.style.display = "none";
}

//IMAGEN NOSOTROS
   // Get the modal
var lightbox = document.getElementById("lightbox");

// Get the image and insert it inside the lightbox - use its "alt" text as a caption
var img = document.getElementById("nosotros-img");
var lightboxImg = document.getElementById("lightbox-img");

img.onclick = function(){
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
}

// Get the <span> element that closes the lightbox
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the lightbox
span.onclick = function() { 
    lightbox.style.display = "none";
}