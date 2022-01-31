export const state = () => ({
    cartItems:{
        products : [],
      }, 
      qty:0,  
      total:0.0,
});

export const mutations = {
    addProduct(state,payload){
      const id = payload.id;
      const index = state.cartItems.products.findIndex(item => item.id === id);
      const existingProduct = state.cartItems.products.find( item => item.id === id);
      existingProduct.qty = existingProduct.qty + 1;
      existingProduct.total = existingProduct.price * existingProduct.qty;
      state.cartItems.products[index] = existingProduct;  
    },
    removeProduct(state,payload){
      const id = payload.id;
      const index = state.cartItems.products.findIndex(item => item.id === id);
      const existingProduct = state.cartItems.products.find( item => item.id === id);
      if(existingProduct.qty === 0){
        return;
      }
      existingProduct.qty = existingProduct.qty - 1;
      existingProduct.total = existingProduct.price * existingProduct.qty;
      state.cartItems.products[index] = existingProduct;  
    },
    addToCart(state,payload){
        const product = payload.products;
        const existingProduct = state.cartItems.products.find( item => item.id === product.id);
        if(existingProduct){
          const index = state.cartItems.products.findIndex(item => item.id === product.id);
          existingProduct.qty = existingProduct.qty + 1;
          existingProduct.total = existingProduct.price * existingProduct.qty;
          // console.log(existingProduct.total);
          state.cartItems.products[index] = existingProduct;  
        }
        else{ 
          const cartItems = { ...product, qty: 1, total:product.price};
          state.cartItems.products.push(cartItems);
        }
        state.qty++;
      },
      removeFromCart(state,payload){
        const id = payload.id;
        state.cartItems.products = state.cartItems.products.filter(item => item.id !== id);
      },
      addItemToSaveForLater(_,payload){
        console.log(payload);
      }
  }

export const getters = {
    getQtyTotal:(state)=>{
        const products = state.cartItems.products;
        let qty = 0;
        for(const val of products){
          qty = Number(qty) + Number(val.qty);
        }
        qty = Number(qty);
        state.qty = qty;
        if(state.qty===0){
          return 0;
        }
        return state.qty;
    },
    getCartItems:(state)=>{
        return state.cartItems.products;
    }
}
