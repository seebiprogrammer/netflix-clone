const faqs = document.querySelectorAll(".faq");
const closeFaqs = document.querySelectorAll(".close");
const openFaqs = document.querySelectorAll(".open");
const icons = document.querySelectorAll(".faq .close .icon i");

closeFaqs.forEach((close) => {
  close.addEventListener("click", () => {
    openFaqs.forEach((open) => {
      open.classList.toggle("openSlide");
      iconChange();
    });
  });
});

const iconChange = () => {
  icons.forEach((icon) => {
    icon.classList.toggle("fa-times");
  });
};
