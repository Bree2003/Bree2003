function resizeIframe(iframe) {
  iframe.style.height =
    iframe.contentWindow.document.documentElement.scrollHeight + "px";
}

function executeResize() {
  const projects = document.querySelector("#projects");
  resizeIframe(projects);
  const skills = document.querySelector("#skills");
  resizeIframe(skills);
  const contact = document.querySelector("#contact");
  resizeIframe(contact);
}

window.addEventListener("load", executeResize);
window.addEventListener("resize", executeResize);
