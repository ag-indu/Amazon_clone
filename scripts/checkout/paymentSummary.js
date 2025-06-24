import { cart } from "../../Data/cart.js";
import { getProduct } from "../../Data/product.js";
import { getDeliveryOption } from "../../Data/deliveryOptions.js";


export function renderPaymentSummary(){
    let productPrice = 0;
    let deliveryOptionPrice = 0;
    cart.forEach((cartItem)=>{
        const product = getProduct(cartItem.productId);
        const deliveryOption = getDeliveryOption(cart.deliveryOption);
        productPrice += product.price*cartItem.quantity;
        deliveryOptionPrice += deliveryOption.price;

    })
   console.log(deliveryOptionPrice);
   console.log(cart);
   const totalBeforeTax = productPrice+deliveryOptionPrice;
   const tax = Number((totalBeforeTax * 0.1).toFixed(2));
   const totalPrice = totalBeforeTax+tax;

   const paymentSummaryHtml = `
            <div class="payment-summary-title">
            Order Summary
            </div>

            <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">₹${productPrice}</div>
            </div>

            <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹${deliveryOptionPrice}</div>
            </div>

            <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">₹${totalBeforeTax}</div>
            </div>

            <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">₹${tax}</div>
            </div>

            <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹${totalPrice}</div>
            </div>

            <button class="place-order-button button-primary">
            Place your order
            </button>

 `;

 document.querySelector('.payment-summary').innerHTML = paymentSummaryHtml;

}