const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("ul li a");

const resetLinks = () =>
  navlinks.forEarch((link) => link.classList.remove("active-section"));

const handleScroll = () => {
  const { pageYOffset } = window;
  sections.forEach((section) => {
    const { id, offsetTop, clientHeight } = section;
    const offset = offsetTop - 1;
    if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
      resetLinks();
      navlinks.forEarch((link) => {
        if (link.dataset.scroll === id) {
          link.classList.add("active-section");
        }
      });
    }
  });
};

document.addEventListener("scroll", handleScroll);
