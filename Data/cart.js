export let cart = [
    {
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:1
    }
]
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
}


let html = ''
// let orderSummary = document.querySelector('.order-summary');
// cart.forEach((item)=>{
//     products.forEach((product)=>{
//         if(product.name===item.productName){
//             
//         }
//     })

// })

// orderSummary.innerHTML = html