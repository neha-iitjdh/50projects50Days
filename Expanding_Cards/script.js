const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
// This function removes the 'active' class from all panels
// when a new panel is clicked, ensuring only one panel is active at a time.
// The 'active' class is added to the clicked panel, expanding it visually.
// The event listener is set up for each panel to handle the click event.
