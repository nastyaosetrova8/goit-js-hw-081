// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);
console.log(SimpleLightbox);


const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    navText: ['<','>'], 
    captions: true, 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
