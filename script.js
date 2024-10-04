const ratingForm = document.getElementById("rating-component");
const thankYouModal = document.getElementById("thank-you-modal");
const selectedRating = document.getElementById("selected-rating");
const ratingButtons = document.querySelectorAll("input[name='rating']");
const errorMessage = document.querySelector(".error-message");
const closeModal = document.getElementById("close-modal");
ratingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const selected = document.querySelector("input[name='rating']:checked");
  if (selected) {
    selectedRating.textContent = selected.value;
    thankYouModal.showModal();
    errorMessage.classList.remove("show");
    ratingForm.reset();
  } else {
    errorMessage.classList.add("show");
  }
});

closeModal.addEventListener("click", () => {
  thankYouModal.close();
});
