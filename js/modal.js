// Open the Modal
function openModal() {
  document.getElementById('modal').style.display = "block";
  document.getElementById('modal-overlay').style.display = "block";
  document.body.classList.add("no-scroll");
}

// Close the Modal
function closeModal() {
  document.getElementById('modal').style.display = "none";
  document.getElementById('modal-overlay').style.display = "none";
  document.body.classList.remove("no-scroll");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    var modalOverlay = document.getElementById('modal-overlay');
    if (event.target == modalOverlay) {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}

var slide_index = 1;

// Next/previous controls
function nextPrevious(n) {
  showSlides(slide_index += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slide_index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("modal-slides");
  // var dots = document.getElementsByClassName("demo");
  var caption = document.getElementById("caption");

  // if index is greater than the max index, start at the first index
  if (n > slides.length) {slide_index = 1}

  // if index is less than 1, start at the last index
  if (n < 1) {slide_index = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }

  // index is 0 based, so subtract 1 from the index passed in
  var zero_based_index = slide_index - 1;
  slides[zero_based_index].style.display = "block";
  // dots[zero_based_index].className += " active";
  caption.innerHTML = document.getElementById("img" + slide_index).alt;
}
