import '../scss/index.scss';
import 'bootstrap';

import productImgSrc from '../../public/assets/product.jpg';
let cards = document.querySelectorAll('.card .img');
cards.forEach((card) => {
    const productImg = new Image();
    productImg.src = productImgSrc;
    card.appendChild(productImg)
    productImg.classList.add('card-img-top')
})
const productImg = new Image();




