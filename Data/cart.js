export let cart = JSON.parse(localStorage.getItem('cart'))||[];
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
