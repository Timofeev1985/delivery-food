let modalCart = function () {
  const modalCart = document.querySelector(".modal.modal-cart");

  const modalDialog = document.querySelector(".modal-dialog");
  document.addEventListener("click", (e) => {
    console.log(modalCart);

    if (
      e.target.dataset.toggle == "modal-cart" ||
      e.target.parentNode.dataset.toggle == "modal-cart" ||
      (!e.composedPath().includes(modalDialog) &&
        modalCart.classList.contains("is-open"))
    ) {
      e.preventDefault();
      modalCart.classList.toggle("is-open");
    }
  });
  document.addEventListener("keyup", (event) => {
    console.log(event.key);
    if (event.key == "Escape" && modalCart.classList.contains("is-open")) {
      modalCart.classList.toggle("is-open");
    }
  });
};
modalCart();
