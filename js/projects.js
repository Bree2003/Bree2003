// project's information
const projects = [
  {
    id: 1,
    title: "Desencriptador Alura",
    description:
      "Proyecto de Alura Oracle desarrollado con HTML5, CSS3 y JS. Puedes encriptar y desencriptar texto, además de copiarlo al portapapeles.",
    image: "../img/desencriptador.jpeg",
  },
  {
    id: 2,
    title: "Smoothies Auth",
    description:
      "Proyecto desarrollado con Node y ejs para las views, Express y Sequelize con MySQL. Te permite registrarte, loguearte y protección de rutas con jwt",
    image: "../img/smoothies.jpeg",
  },
  {
    id: 3,
    title: "Inspire Up",
    description:
      "Proyecto de AIEP desarrollado con Next, Fastify y Firebase. Puedes registrarte como voluntariao o empresa y gestionar tus postulacions o programas de voluntariado.",
    image: "../img/voluntariado.jpeg",
  },
  {
    id: 4,
    title: "Wallet Alke",
    description:
      "Proyecto de Talento Digital desarrollado con la tríada y usando sesionStorage para guardar las cuentas creadas. Te permite depositar, retirar y transferir entre cuentas y contactos.",
    image: "../img/wallet.jpeg",
  },
  {
    id: 5,
    title: "Black Domino Atelier",
    description:
      "Proyecto de Generation y PyME desarrollado con Java y React. Puedes gestionar tu carrito de compras y hacer un pedido utilizando un medio de pago.",
    image: "../img/black-domino.jpeg",
  },
];

let divProjects = document.querySelector("#projects");

projects.forEach((project) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const p = document.createElement("p");
  h3.textContent = project.title;
  img.src = project.image;
  img.alt = project.title;
  p.textContent = project.description;
  div.appendChild(h3);
  div.appendChild(img);
  div.appendChild(p);
  divProjects.appendChild(div);
});
