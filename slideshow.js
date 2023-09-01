// 定义一个变量来跟踪当前显示的幻灯片的索引
let slideIndex = 1;

// 初始化幻灯片，显示第一张
showSlides(slideIndex);

// 创建一个函数来增加或减少当前显示的幻灯片的索引
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 创建一个函数来显示当前索引的幻灯片
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
