const navLinks = document.querySelectorAll(".navigation a");
const currentPage = window.location.pathname;
const toggleButton = document.querySelector('.toggle-button');
const navigation = document.querySelector('.navigation');

const currentLink = Array.from(navLinks).find((link) =>
  link.href.includes(currentPage)
);

if (currentLink) {
  currentLink.classList.add("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});

toggleButton.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
