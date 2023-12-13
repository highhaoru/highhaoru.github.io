// 确保 DOM 完全加载后再运行脚本
document.addEventListener("DOMContentLoaded", function() {
    // 初始化 performerAward 幻灯片索引
    let slideIndex = 1;
    showSlides(slideIndex);
  
    // 为点添加点击事件监听器
    const dots = document.querySelectorAll('.performerAward-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        const n = parseInt(this.getAttribute('data-slide-to'));
        showSlides(slideIndex = n);
      });
    });
  
    // 下一张/上一张 按钮事件监听器
    const prevButton = document.querySelector('.performerAward-prev');
    const nextButton = document.querySelector('.performerAward-next');
  
    prevButton.addEventListener('click', function() {
      showSlides(slideIndex -= 1);
    });
  
    nextButton.addEventListener('click', function() {
      showSlides(slideIndex += 1);
    });
  
    // 展示幻灯片函数
    function showSlides(n) {
      let i;
      const slides = document.querySelectorAll('.performerAward-mySlides');
      if (!slides.length) return; // 退出如果没有幻灯片
  
      const dots = document.querySelectorAll('.performerAward-dot');
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
  
      // 隐藏所有幻灯片
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
  
      // 移除所有点的激活状态
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
  
      // 显示当前幻灯片并激活对应点
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
    }
  });
  