var miGif = document.getElementById("miGif");

setInterval(function() {
  miGif.src = (miGif.src === "miGif.gif" ? "" : "miGif.gif");
}, 1000);
