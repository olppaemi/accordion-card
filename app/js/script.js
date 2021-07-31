const accordionButtons = document.querySelectorAll('.accordion-button');
const accordionCollapses = document.querySelectorAll('.accordion-collapse');

accordionButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const accordionCollapse = e.target.parentElement.nextElementSibling;

    accordionButtons.forEach((btn) => {
      if (btn.classList.contains('show')) {
        btn.classList.remove('show');
      }
    });

    accordionCollapses.forEach((el) => {
      if (el != accordionCollapse) {
        el.classList.remove('show');
      }
    });

    if (!accordionCollapse.classList.contains('show')) {
      accordionCollapse.classList.add('show');
      button.classList.add('show');
    } else {
      accordionCollapse.classList.remove('show');
    }
  });
});
