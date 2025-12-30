const video = document.getElementById("bg-video");
video.play().catch(() => {
  console.log("Autoplay blocked, user interaction required");
});
