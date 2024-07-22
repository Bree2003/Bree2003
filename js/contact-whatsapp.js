document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `Nombre: ${name}\nMensaje: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${+56996642857}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  });
