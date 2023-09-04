// Initialize the slide index for each project
const slideIndexes = {
  'tuiter': 1,
  'java': 1,
  'gymUi': 1
};

// Function to move to next/previous slide
function plusSlides(n, project) {
  showSlides(slideIndexes[project] += n, project);
}

// Function to show the slide at a specific index
function currentSlide(n, project) {
  showSlides(slideIndexes[project] = n, project);
}

// Function to handle showing slides
function showSlides(n, project) {
  let i;
  const slides = document.getElementsByClassName(`${project}-mySlides`);
  const dots = document.getElementsByClassName(`${project}-dot`);
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
  
  // Show the current slide and set the dot as active
  slides[slideIndexes[project] - 1].style.display = "block";
  dots[slideIndexes[project] - 1].className += " active";
}

// Initialize slides
showSlides(slideIndexes['tuiter'], 'tuiter');
showSlides(slideIndexes['java'], 'java');
showSlides(slideIndexes['gymUi'], 'gymUi');

// Add click events to dots
document.addEventListener("DOMContentLoaded", function() {
  const projects = ['tuiter', 'java'];
  
  projects.forEach(project => {
    const dots = document.querySelectorAll(`.${project}-dot`);
    
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function() {
        const n = parseInt(this.getAttribute("data-slide-to"));
        currentSlide(n, project);
      });
    });
  });
});
