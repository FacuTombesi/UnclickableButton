document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("moving-button")
  const message = document.getElementById("message")
  const proximityThreshold = 100
  let canMove = true

  function isMobile() {
    return window.innerWidth <= 768;
  }

  if (isMobile()) {
    canMove = false;
  }

  document.addEventListener("mousemove", (e) => {
    if (!canMove) return;

    const mouseX = e.clientX
    const mouseY = e.clientY
    const buttonRect = button.getBoundingClientRect()
    const buttonX = buttonRect.left + buttonRect.width / 2
    const buttonY = buttonRect.top + buttonRect.height / 2

    const distance = Math.hypot(buttonX - mouseX, buttonY - mouseY);

    if (distance < proximityThreshold) {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const buttonWidth = buttonRect.width
      const buttonHeight = buttonRect.height

      const randomX = Math.random() * (viewportWidth - buttonWidth)
      const randomY = Math.random() * (viewportHeight - buttonHeight)

      button.style.left = randomX + "px";
      button.style.top = randomY + "px";

      canMove = false;
      setTimeout(() => {
        canMove = true;
      }, 100);
    }
  });

  button.style.left = "50%";
  button.style.top = "50%";
  button.style.transform = "translate(-50%, -50%)";

  button.addEventListener("click", () => {
    message.style.display = "block";
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  });

  const closeButton = document.getElementById("message-close")
  closeButton.addEventListener("click", () => {
    message.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == message) {
      message.style.display = "none";
    }
  });
})