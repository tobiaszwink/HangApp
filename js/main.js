function surgi (display) {
  document.getElementById("manobras-iniciais").style.display = display;
}

function surgi2 (display) {
  document.getElementById("manobras-iniciais2").style.display = display;
}

$("#slide ul").cycle({
  fx:'fade',
  speed: 2000,
  timeout: 2000,
  prev: "#at",
  next: "#px",
})