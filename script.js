const musica = document.getElementById("musica");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

const texto =
  "Este regalo es una promesa de amor eterno. " +
  "Eres y siempre serás tú en mi vida; no existe duda alguna en mi corazón. " +
  "Te amo más de lo que las palabras pueden explicar. " +
  "Y quiero que lo lleves contigo para recordarme cuando estemos lejos. " +
  "Así, aunque la distancia nos separe, mi presencia y mi amor siempre estarán a tu lado.";


function iniciar() {
  const nombre = document.getElementById("nombre").value.trim();

  if (nombre === "") {
    alert("Escribe tu nombre 💕");
    return;
  }

  inicio.style.display = "none";
  contenido.style.display = "block";

  titulo.textContent = `Para ti, ${nombre} 💖`;

  musica.play();
  escribirTexto();
  iniciarCorazones();
}

/* Texto letra por letra */
function escribirTexto() {
  let i = 0;
  mensaje.textContent = "";

  const intervalo = setInterval(() => {
    mensaje.textContent += texto[i];
    i++;
    if (i >= texto.length) {
  clearInterval(intervalo);
  setTimeout(() => {
    document.getElementById("final").classList.remove("oculto");
    document.getElementById("final").style.opacity = 1;
  }, 1500);
}

  }, 50);
}

/* Corazones */
function iniciarCorazones() {
  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.textContent = "❤️";
    corazon.className = "corazon";
    corazon.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(corazon);

    setTimeout(() => corazon.remove(), 6000);
  }, 400);
}

/* Imagen grande */
document.querySelectorAll(".galeria img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

function cerrarModal() {
  modal.style.display = "none";
}
