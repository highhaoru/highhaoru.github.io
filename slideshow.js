// Slide indices for each project
const slideIndexes = {
  'tuiter': 1,
  'java': 1
};

// Move slides by n positions
function plusSlides(n, project) {
  showSlides(slideIndexes[project] += n, project);
}

// Show the current slide for a given project
function showSlides(n, project) {
  let i;
  let slides = document.getElementsByClassName(`${project}-mySlides`);
  let dots = document.getElementsByClassName(`${project}-dot`);
  if (n > slides.length) { slideIndexes[project] = 1; }
  if (n < 1) { slideIndexes[project] = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide
  slides[slideIndexes[project] - 1].style.display = "block";
  
  // Add "active" class to the current dot
  dots[slideIndexes[project] - 1].className += " active";
}

// Initialize the slides for each project
showSlides(slideIndexes['tuiter'], 'tuiter');
showSlides(slideIndexes['java'], 'java');
