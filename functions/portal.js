const portal = document.querySelector('.portal');

portal.addEventListener('click', () => {
    if (portal.classList.contains('active')) {
        portal.style.width = '200px';
        portal.style.height = '200px';
        portal.classList.remove('active');
    } else {
        portal.style.width = '400px';
        portal.style.height = '400px';
        portal.classList.add('active');
    }
});
