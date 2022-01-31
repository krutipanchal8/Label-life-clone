<template>
    <div class="container">
        <div class="header__container ">
            <header>
                <span id="part1">Malaika</span><span id="part2"> also loves</span>
            </header>    
        </div>
        <div class="recommendation__container">
            <div class="row">
                <div class="col-3" v-for="(product, key) in this.products" :key="key">
                        <div class="product__image">
                            <img :src="require(`~/assets/Images/Malaika/${product.image}`)" alt="">
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
                </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            products:[
                {
                    id:1,
                    image:'image1.jpg',
                    title:'MIDNIGHT FLUTTER SLEEVE SKATER DRESS',
                    size:['XS','S','M','L','XL','XXL'],
                    price: '2,290'
                },
                {
                    id:2,
                    image:'image2.jpg',
                    title:'FOREST PLEATED REFFLE TIE DRESS',
                    size:['XS','S','M','L','XL','XXL'],
                    price: '2,490'
                },
                {
                    id:3,
                    image:'image3.jpg',
                    title:'BLACK RUFFLE DRESS',
                    size:['S','M','L','XL'],
                    price: '1,290'
                },
                {
                    id:4,
                    image:'image4.gif',
                    title:'NAVY FLORAL BELTED RUFFLE DRESS',
                    size:['XS','S','L','XL','XXL'],
                    price: '1,792'
                },
            ]
        }
    }        
}
</script>

<style scoped>

.container{
    margin: 30px 0px 0px 0px!important
}

.recommendation__container{
    width: 1650px;
    margin: 15px 15px 80px 15px;
}

header{
    font-family: 'Austin Cyr';
    height: 90px;
    margin-left: 60px;
}

.col-3{
    padding: 0px!important;
}

#part1{
    font-size: 60px;
    font-weight: 700;
}

#part2{
    font-size: 60px;
    font-style: italic;
    text-transform: lowercase;
}

/* .product__image img{
    width: 450px;
    height: 530px;
} */

.product__title{
    /* font-style: normal; */
    font-size: 13px;
    letter-spacing: 2px;
}
/* 400x533 */
.product__image img{
    height: 545px;
    width: 415px;
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