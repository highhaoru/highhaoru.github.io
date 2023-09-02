function plusSlides(n, project) {
  showSlides(slideIndexes[project] += n, project);
}

const slideIndexes = {
  'tuiter': 1,
  'java': 1
};

function showSlides(n, project) {
  let i;
  let slides = document.getElementsByClassName(`${project}-mySlides`);
  if (n > slides.length) { slideIndexes[project] = 1; }
  if (n < 1) { slideIndexes[project] = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexes[project] - 1].style.display = "block";
}

// Initialize
showSlides(slideIndexes['tuiter'], 'tuiter');
showSlides(slideIndexes['java'], 'java');
