export let cart = /*JSON.parse(localStorage.getItem('cart'))||*/[
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
    }
];
export function addToCart(productId){
    let matchingitem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingitem = cartItem;
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

    saveToStorage();
}

export function removeFromCart(productId){
    cart.forEach((cartItem,index)=>{
        if(productId ===cartItem.productId){
          cart.splice(index,1);
          console.log(cart);
        }
      })
      saveToStorage();
}
export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}


export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingitem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingitem = cartItem;
        }
    })

    matchingitem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
    
}