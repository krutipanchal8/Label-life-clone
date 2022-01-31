<template>  
    <div class="cart__products">
        <div class="row header">
            <div class="col-2">
                <span id="product">PRODUCT</span>
            </div>
            <div class="col-5">
            </div>
            <div class="col-3" id="quantity">
                <span >QUANTITY</span> 
            </div>
            <div class="col-2" id="total">
                <span >TOTAL</span> 
            </div>
        </div>
        <div class="row body" v-for="(product,key) in getCartItems" :key="key">
            <div class="col-2">
                <img :src="require(`~/assets/Images/Sussanne/${product.image}`)" alt="">
            </div>
            <div class="col-5">
                <div class="title">
                    <span>{{ product.title }}</span>
                </div>
                <div class="price">
                    <span>&#8377;{{ product.price.toLocaleString() }}</span>
                </div>
            </div>
            <div class="col-3">
                <div class="quantity">
                    <button id="minus" @click="removeProduct({ id: product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <input type="number" name="quantity" min="1" v-model="product.qty" @input="updateCart($event)" title="Qty" class="input-text qty text" size="4">
                    <button id="plus" @click="addProduct({ id: product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
                <div class="remove">
                    <span id="remove" @click="removeFromCart({ id:product.id })">remove</span>
                </div>
            </div>
            <div class="col-2">
                <div class="total">
                    <span>&#8377;{{ product.total.toLocaleString() }}</span>
                </div>
            </div>
        </div>
        <br><br>
        <hr id="line">
        <div class="total__container">
            <span id="final__total">TOTAL: &#8377; {{ getSubTotal().toLocaleString() }} </span><br>
            <button>CHECKOUT</button>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    methods:{
        getProductDetails(){
            const id = this.$route.query.id;
            const productDetail = this.getProducts;
            const product = productDetail.find(product => product.id == id);
            return product;
        },
        getSubTotal() {
            const products = this.getCartItems;
            console.log(products); 
            let total = Number(0);
            for(const val of products){
                total = total + Number(val.total);
            }
            total = Number(total);
            console.log(total);
            if(total===0){
                return 0;
            }
            return total;
        }, 
        ...mapMutations("cart",['updateCart','removeFromCart','addProduct','removeProduct']),
    },
    computed:{
        ...mapGetters("products",['getProducts']),
        ...mapGetters("cart",['getCartItems','getSaveItems','getQtyTotal']),
    },
}
</script>

<style scoped>

.cart__products{
    margin: 20px 310px;
    font-family: Lato,sans-serif;
}

.header{
    font-size: 12px;
    letter-spacing: 2.2px;
    border-bottom: 1px solid #d5d5d5;
}

.header .col-2,.col-5,.col-3{
    padding: 0px 0px 10px 0px !important;
}

.col-2 img{
    height: 180px;
    width: 140px ;
}

#quantity{
    text-align: center;
}

#total{
    text-align: right;
}
.quantity{
    border: 1px solid #d5d5d5;
    width: 110px;
}
 
.quantity .input-text.qty {
 width: 50px;
 height: 39px;
 padding: 0 5px;
 text-align: center;
 background-color: transparent;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus{
    outline: none;
}

#product{
    padding: 0!important;
}
#minus{
    padding: 10px 0px 0px 7px;
}

.body{
    margin-top: 40px;
}

.body .col-2,.col-5,.col-3{
    padding: 0 !important;
}

.title{
    cursor: pointer;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
}

.price{
    padding-top:5px;
    font-size: 15px;
}

.quantity{
    margin: 50px 0px 0px 90px;
}

.total{
    text-align: right;
    margin-top: 80px;
    font-size: 12px;
    letter-spacing: 1.5px;
}

.remove{
    width: 50px;
    margin: 15px 0px 0px 120px;
    text-align: center;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1.3px;
    border-bottom: 1px solid #a5a5a5;
    transition: transform .2s ease-in-out;
}

.remove:hover{
    cursor: pointer;
    border: none;
}

#line{
    opacity: 0.4;
}

.total__container{
    margin: 25px 0px;
    text-align: right;
    font-family: Lato,sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 2px;
}

.total__container button{
    color: #fff;
    background: #000;
    padding: 10px 35px;
    font-weight: normal;
    letter-spacing: 2px;
    margin: 20px 0px 70px 0px;
}

</style>