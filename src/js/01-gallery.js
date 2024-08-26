import { galleryItems } from './gallery-items';
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    `;
  })
  .join('');

document.querySelector('.gallery').innerHTML = galleryMarkup;

let gallery = new SimpleLightbox('.gallery a', {
  download: 'download by clicking here',
});
gallery.on('show.simplelightbox', function () {
  // Do something…
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // Some usefull information
});
