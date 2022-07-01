const galleryBackground = document.getElementById('gallery'),
    galleryItem = document.querySelectorAll('.gallery__item');

galleryItem.forEach(link => {
    link.addEventListener('click', () => {
        galleryItem.forEach(item => {
            item.classList.remove('item_active');
        });
        link.classList.add('item_active');
        // set the background of gallery by a current image
        let linkBg = link.getElementsByTagName("img")[0].src; // get link of an element
        galleryBackground.style.cssText = `background: url(${linkBg}) no-repeat center center;
        background-size: cover;
        border-radius: 16px;`;
    });
});