// , query: { name: `${category.name}`} 
<template>
    <div class="product__container">
        <div class="row">
            <div class="col-4" v-for="(product, key) in getProducts" :key="key">
                <nuxt-link :to='{ path: `products/${product.title}` ,query: { id: `${product.id}`}}'>
                    <div class="product__image" @mouseover="toggleImageTrue(product.id)" @mouseleave="toggleImageFalse(product.id)" >
                        <img :src="require(`~/assets/Images/Sussanne/${product.image}`)" v-show="product.toggle" alt="">
                        <img :src="require(`~/assets/Images/Sussanne/${product.image1}`)" v-show="!product.toggle" alt="">
                    </div>
                    
                    <div class="product__title">
                        <span>{{ product.title }}</span>
                    </div>
                    <div class="product__size" > 
                        <span v-for="(size,key) in product.size" :key=key>{{ size }}</span>
                    </div>
                    <div class="product__price">
                        <span>&#8377;{{ product.price }}</span>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

.product__container{
    margin: 50px 60px;
    font-family: Lato,sans-serif;
    font-weight: .5em;
}

.product__image img{
    height: 682px;
    width: 510px;
}

.col-4{
    height: 800px;
    cursor: pointer;
    animation-name: transition;
    animation-duration: 10s;
    text-transform: uppercase;
}

a{
    color: #000;
}

.product__title{
    /* font-style: normal; */
    font-size: 13px;
    letter-spacing: 2px;
}

.product__size{
    font-size: 10px;
    margin-top: 5px;
}

.product__size span{
    padding-right: 4px;
}

.product__price{
    font-size: 13px;
    margin-top:2px;
}
</style>

<script>
import { mapGetters,mapMutations } from 'vuex';

export default {
    data(){
        return{
            imageChange: true,
            products: [],
        }
    },
    methods:{
        toggleImageTrue(productId){
            this.changeImageTrue({ id : productId});
        },
        toggleImageFalse(productId){
            this.changeImageFalse({ id : productId});
        },
        filterData(){
            console.log()
        },
        ...mapMutations("products",['changeImageTrue','changeImageFalse'])
    },
    computed:{
        ...mapGetters("products",['getProducts','getFilteredDetails']),
    },
}

</script>
