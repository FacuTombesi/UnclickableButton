document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("moving-button")
  const proximityThreshold = 100
  let canMove = true

  document.addEventListener("mousemove", (e) => {
    if (!canMove) return;

    const mouseX = e.clientX
    const mouseY = e.clientY

    const buttonRect = button.getBoundingClientRect()
    const buttonX = buttonRect.left + buttonRect.width / 2
    const buttonY = buttonRect.top + buttonRect.height / 2

    const distance = Math.hypot(buttonX - mouseX, buttonY - mouseY)

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
})