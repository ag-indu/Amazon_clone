import { cart,removeFromCart,updateDeliveryOption } from "../../Data/cart.js";
import { products,getProduct } from "../../Data/product.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import {deliveryOptions,getDeliveryOption} from '../../Data/deliveryOptions.js'
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderOrderSummary(){
  function renderCartItem(){
    let html = ''
  cart.forEach((cartItem)=>{
      const matchingProduct = getProduct(cartItem.productId);
      const deliveryOptionId = cartItem.deliveryOptionId;
      let deliveryOption = getDeliveryOption(deliveryOptionId);
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
      const dateString = deliveryDate.format('dddd, MMMM D');
      
  
      html += `<div class="cart-item-container">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>
  
              <div class="cart-item-details-grid">
                <img class="product-image"
                  src=${matchingProduct.image}>
  
                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                  ₹${matchingProduct.price}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary delete-link" data-product-id="${matchingProduct.id}">
                      Delete
                    </span>
                  </div>
                </div>
  
                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionHTML(matchingProduct,cartItem)}
                </div>
              </div>
            </div>`
  })
  console.log
  document.querySelector('.order-summary').innerHTML = html;
  document.querySelectorAll('.delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      console.log(productId);
      removeFromCart(productId);
      renderCartItem();
      renderPaymentSummary();
    })
  })
  }
  
  renderCartItem();
  
  
  function deliveryOptionHTML(matchingProduct,cartItem){
    let html = ``;
    deliveryOptions.forEach((deliveryOption)=>{
  
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
      const dateString = deliveryDate.format('dddd, MMMM D');
      const priceString = deliveryOption.price ===0 ? 'FREE' : `₹${deliveryOption.price} -`;
      
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
     html += `
          <div class="delivery-option" data-product-id=${matchingProduct.id} data-delivery-option-id=${deliveryOption.id}>
          <input type="radio" ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}" >
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
            ${priceString} - Shipping
            </div>
          </div>
        </div>
      `
    })
    return html;
  }
  
  document.querySelectorAll('.delivery-option').forEach((element)=>{
    element.addEventListener('click',()=>{
      const {productId,deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId,deliveryOptionId);
      renderOrderSummary();
    })
  })
}

