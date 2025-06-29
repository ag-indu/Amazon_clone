function Cart(localStorageKey){
    const cart = {
        cartItems: [
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId: '1'
            }
        ],
        addToCart(productId){
            let matchingitem;
            this.cartItems.forEach((cartItem)=>{
                if(productId===cartItem.productId){
                    matchingitem = cartItem;
                }
            })
        
            if(!matchingitem){
                    this.cartItems.push({
                    productId,
                    quantity:1
                });
            }
            else{
                matchingitem.quantity++;
            }
        
            saveToStorage();
        },
        removeFromCart(productId){
            this.cartItems.forEach((cartItem,index)=>{
                if(productId ===cartItem.productId){
                  this.cartItems.splice(index,1);
                  console.log(cart);
                }
              })
              saveToStorage();
        },
    
        saveToStorage(){
            localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
        },
    
        updateDeliveryOption(productId,deliveryOptionId){
            let matchingitem;
            this.cartItems.forEach((cartItem)=>{
                if(productId===cartItem.productId){
                    matchingitem = cartItem;
                }
            })
        
            matchingitem.deliveryOptionId = deliveryOptionId;
            saveToStorage();
            
        }
    
    };
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('business-cart-oop');


console.log(cart);
console.log(businessCart);