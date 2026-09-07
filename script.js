const toggle = document.getElementById("modeToggle");
const heroCopy = document.getElementById("heroCopy");

toggle.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("day-mode")) {
    body.classList.remove("day-mode");
    body.classList.add("night-mode");

    heroCopy.textContent =
      "Deep grooves, dim rooms, and tracks made for staying out late.";
  } else {
    body.classList.remove("night-mode");
    body.classList.add("day-mode");

    heroCopy.textContent =
      "Soft grooves, sunny afternoons, and songs that make you linger.";
  }
});
