const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  const body = document.body;
  const isDay = body.classList.contains("day-mode");

  body.classList.toggle("day-mode", !isDay);
  body.classList.toggle("night-mode", isDay);

  toggle.setAttribute(
    "aria-label",
    isDay
      ? "Switch to day mode"
      : "Switch to night mode"
  );
});
