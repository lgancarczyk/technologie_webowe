const hamburger_button = document.querySelector(".hamburger_button");
      const my_links_id = document.querySelector(".nav_menu_mobile");

      hamburger_button.addEventListener("click", () => {
        my_links_id.classList.toggle("nav_menu_mobile_closed");
        my_links_id.classList.toggle("nav_menu_mobile_open");
      });



////
//
const img1 = document.querySelector('#gallery_img_1');
const img2 = document.querySelector('#gallery_img_2');
const img3 = document.querySelector('#gallery_img_3');
const img4 = document.querySelector('#gallery_img_4');
const img5 = document.querySelector('#gallery_img_5');
const img6 = document.querySelector('#gallery_img_6');
const img7 = document.querySelector('#gallery_img_7');
const img8 = document.querySelector('#gallery_img_8');
const img9 = document.querySelector('#gallery_img_9');
const img10 = document.querySelector('#gallery_img_10');
const img11= document.querySelector('#gallery_img_11');

img1.addEventListener('click', () => openLightbox('images/mock.jpg'))
img2.addEventListener('click', () => openLightbox('images/mock2.jpg'))
img3.addEventListener('click', () => openLightbox('images/mock3.jpg'))
img4.addEventListener('click', () => openLightbox('images/mock4.jpg'))
img5.addEventListener('click', () => openLightbox('images/mock5.jpg'))
img6.addEventListener('click', () => openLightbox('images/mock6.jpg'))
img7.addEventListener('click', () => openLightbox('images/mock7.jpg'))
img8.addEventListener('click', () => openLightbox('images/mock.jpg'))
img9.addEventListener('click', () => openLightbox('images/mock3.jpg'))
img10.addEventListener('click', () => openLightbox('images/mock2.jpg'))
img11.addEventListener('click', () => openLightbox('images/mock6.jpg'))


const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('#lightbox_image');

function openLightbox(imgSource){
  lightbox.classList.add('lightbox_visible');
  lightboxImage.src = imgSource;
}

const close_lightbox_btn = document.querySelector('#close_lightbox_btn');
close_lightbox_btn.addEventListener('click', () =>closeLightbox())

function closeLightbox(){
  lightbox.classList.remove('lightbox_visible');
}