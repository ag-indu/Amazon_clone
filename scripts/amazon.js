let videoGrid = '';
let cartCountText = document.querySelector('.cart-item-number');
cartCountText.innerHTML = 0;
import {cart} from '../Data/cart.js'
import { products } from '../Data/product.js';

products.forEach((product)=>{
    const html = `<article class="item-description">
    <div class="item-image-container">
        <img src=${product.image} alt="" class="item-image">
    </div>
    <div>
        <p class="item-title">${product.name}</p>
        <div class="rating">
            <img src="images/star-ratings/rating-${product.rating.stars*10}.png" alt="star-rating" class="rating-image">
            <p>${product.rating.count}</p>
        </div>
        <p class="price">₹${product.price}</p>
        <select name="quantity" id="quantity" class="dropdown">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
    <button class="cart-button" data-product-id="${product.id}">Add to Cart</button>
</article>`
  videoGrid += html;
})

document.querySelector('.products').innerHTML = videoGrid

document.querySelectorAll('.cart-button').forEach((button)=>{
    button.addEventListener('click',()=>{
        
        const productId = button.dataset.productId;
        let matchingitem;
        cart.forEach((item)=>{
            if(productId===item.productId){
                matchingitem = item;
            }
        })

        if(!matchingitem){
                cart.push({
                productId,
                quantity:1
            });
        }
        else{
            matchingitem.quantity++;
        }
        let cartCount = 0;
        console.log(cart);
        cart.forEach((item)=>{
            cartCount += item.quantity;
        })
        cartCountText.innerHTML = cartCount;
    });

})