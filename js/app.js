const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {

  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {

    console.log("chao")
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      console.log("chao1")
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      console.log("chao2")
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".footer-section,.container-home,.movie-list-title,.movie-list-container-descriptionfirm,.movie-list-item-detail-star,.movie-list-item-detail-info,.navbar-container,.sidebar,.left-menu-icon,.toggle,.movie-list-item-detail-title,.menu-container,.movie-list-item,.movie-link-display,.movie-link-display,.movie-list-container,.profile-container,.profile-text-container,.page-section,.text-center,.section-heading,.section-subheading"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


 // confirmLogout
 function confirmLogout() {
  var confirmation = confirm("Bạn có chắc muốn logout?");
  return confirmation;
}