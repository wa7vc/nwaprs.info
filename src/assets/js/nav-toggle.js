// Progressive-enhancement mobile nav disclosure. Nav links all work with
// this script disabled -- the toggle only controls the collapsed state.
(function () {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("hidden") === false;
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
})();
