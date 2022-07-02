// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//     body: document.querySelector("body"),
//   };
//   console.log(refs);
//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.body.classList.toggle("no-scroll");
//   }
// })();

(() => {
  const refs = {
    body: document.body,
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
  }
})();
