<template>
    <div class="container">
        <div class="product__container">
            <div class="row">
                <div class="col-8">
                    <div class="row">
                        <div class="col-12">
                            <img :src="require(`~/assets/Images/Sussanne/${this.getProductDetails().image}`)" alt="">
                        </div>
                        <div class="col-12">
                            <img :src="require(`~/assets/Images/Sussanne/${this.getProductDetails().image1}`)" alt="">
                        </div>
                        <div class="col-12">
                            <img :src="require(`~/assets/Images/Sussanne/${this.getProductDetails().image2}`)" alt="">
                        </div>
                        <div class="col-12">
                            <img :src="require(`~/assets/Images/Sussanne/${this.getProductDetails().image3}`)" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="details__container">
                        <div class="header__title">
                            <header>
                                <div class="main__header">
                                    <p>{{ getTitle() }}</p>
                                </div>
                                <div class="sub__header">
                                    <p>Recommended For : <span v-for="(details,key) in getProductDetails().fitGuide" :key="key">{{ details }} </span></p>
                                </div>         
                            </header>   
                        </div>
                        <div class="price__details">
                            <div class="row">
                                <div class="col-11 price">
                                    &#8377;{{ getProductDetails().price.toLocaleString() }}
                                </div>
                                <div class="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="size__details">
                            <select name="size" id="size">
                                <option value="">Please Select Size</option>
                                <option value="" v-for="(size,key) in getProductDetails().size" :key=key>{{size}}</option>
                            </select>
                        </div>
                        <div class="cart__button">
                            <nuxt-link :to='{ path: "/cart" , query: { id : getProductDetails().id } }'>
                                <button @click="addToCart({products: getProductDetails() })">ADD TO CART</button>
                            </nuxt-link>
                        </div>   
                        <div class="delivery__details">
                            <p>Estimated Delivery: Tuesday, 31st August</p>
                        </div>
                        <div class="celebrity__message">
                            <div class="row">
                                <div class="col-3 celeb_img">
                                    <img src="~/assets/Images/Designed_by/Malaika.png" >
                                </div>
                                <div class="col-9 celeb__details">
                                    <span>
                                        Be the leading lady in your life and make a statement even on a regular work day with the perfect pencil dress.
                                    </span>
                                    <br>
                                    <span>
                                        <i>Style Editor, Malaika Arora</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="product__details">
                            <button class="detail__button" @click="changeProductDetailsStatus">PRODUCT DETAILS&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                            </button>
                            <div class="all__details" v-show="isProductDetailsVisible">
                                <ul>
                                    <li>Material: Moss crepe</li>
                                    <li>Color: Sunflower</li>
                                    <li>Wash Care: Machine Wash</li>
                                    <li>Square Neck</li>
                                    <li>Side pockets</li>
                                    <li>Slit detail in the front</li>
                                    <li>Length falls at 40''</li>
                                    <li>Model is wearing size S</li>
                                </ul>
                            </div>
                        </div>
                        <div class="shipping__details">
                            <button class="detail__button" @click="changeShippingDetailsStatus">SHIPPING & RETURNS
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                            </button>  
                            <div class="all__details" v-show="isShippingDetailsVisible">
                                <span>
                                    Free Shipping in India above Rs.1000. We accept returns within 15 days except for 'Final Sale' products. Please note, in case of a return, we issue only store credit. Click here to read more. Please note, in light of the new government guidelines, your order will be delayed by 7 to 10 days.
                                </span>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    data(){
        return{
            isProductDetailsVisible: false,
            isShippingDetailsVisible: false,
        }
    },
    computed:{
        ...mapGetters("products",['getProducts'])
    },
    methods:{
        ...mapMutations("cart",['addToCart']),
        getProductDetails(){
            const id = this.$route.query.id;
            const productDetail = this.getProducts;
            const product = productDetail.find(product => product.id == id);
            return product;
        },
        getTitle(){
            return this.$route.params.title;
        },
        changeProductDetailsStatus(){
            this.isProductDetailsVisible = !this.isProductDetailsVisible;
        },
        changeShippingDetailsStatus(){
            this.isShippingDetailsVisible = !this.isShippingDetailsVisible;
        }
    },
}
</script>

<style scoped>

.container{
    margin: 120px 0px 0px 0px !important;
    max-width: 1800px;   
    min-height: 4000px;
}

.product__container{
    margin: 50px 0px 0px 0px; 
}

.row{
    display: flex;
}

.col-8{
    padding: 0;
}

.col-12 img{
    height: 1400px;
    width:1120px;
}

.details__container{
    margin: 0px 60px;
}

.col-4{
    padding: 0!important;
}

.main__header{
    font-size: 17px!important;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
}

.sub__header{
    font-size: 13px;
    font-family: Baskerville,serif;
    margin: 5px 0px;
}

.price__details .row{
    margin: 25px 0px 0px 3px;
    justify-content: space-around;
}

.price{
    letter-spacing: .2em;
    font-weight: 500;
    font-family: Lato, sans-serif;
    font-size: 17px;
    padding: 0 !important;
}


.size__details select{
    border: 1px solid #d5d5d5;
    padding: 15px;
    font-size: 12px;
    text-transform: uppercase;
    width: 100%;
}

.cart__button button{
    width: 100%;
    background-color: #000;
    color: #fff;
    margin-top: 10px;
    padding: 12px 0px;
    letter-spacing: .2em;
}

.delivery__details{
    text-align: center;
    font-size: 12px;
    color: #4d4e4f;
    margin: 10px 0px 40px 0px;
}

.celeb_img img{
    width: 82px;
    height: 82px;
}

.celebrity__message{
    background-color: #f7f7f7;
}

.celebrity__message .row{
    padding: 8px 23px;
}

.celeb__details span{
    font-family: Baskerville, serif;
    font-size: 13px;
}

.product__details{
    margin: 30px 0px 30px 0px;
}

.detail__button{
    font-size: 12px;
    letter-spacing: .2em;
    width: 100%;
    padding: 15px 0px;
    border-bottom: 1px solid #d5d5d5;
}

button svg{
    margin-left: 240px;
}

.all__details {
    margin-top:20px;
    font-family: Baskerville, serif;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: .1em;
}

.all__details ul{
    list-style: none;
}
</style>