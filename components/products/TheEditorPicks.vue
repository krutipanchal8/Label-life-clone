<template>
    <div class="main__container">
        <div class="container">
            <div class="title">
                <div class="header">
                    <span id="part1">Editor</span><span><i> Picks</i></span>
                </div>
                <div class="subheading">
                    <span><u>SHOP</u> FAVOURITES BY SUSSANE, MALAIKA & BIPASHA</span>
                </div>
            </div>
        </div>
        <!-- <div class="product__container">
            <ul id="autoWidth" class="cs-hidden">
                <li class="item-a">
                    <div class="box" >
                        <div class="slide-img" >
                            <img src="~/assets/Images/Editor_pick/brown_dress1.jpg" alt="">
                            <div class="overlay">
                                <span>choice</span>
                            </div>
                        </div>
                        <div class="detail-box">
                            <div class="type">
                                <span id="data1">Hello</span>    
                                <span id="data2">data2</span>
                                <span>Hello</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="item-b">
                    <div class="box" >
                        <div class="slide-img" >
                            <img src="~/assets/Images/Editor_pick/brown_dress1.jpg" alt="">
                            <div class="overlay">
                                <span>choice</span>
                            </div>
                        </div>
                        <div class="detail-box">
                            <div class="type">
                                <span id="data1">Hello</span>    
                                <span id="data2">data2</span>
                                <span>Hello</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="item-c">
                    <div class="box" >
                        <div class="slide-img" >
                            <img src="~/assets/Images/Editor_pick/brown_dress1.jpg" alt="">
                            <div class="overlay">
                                <span>choice</span>
                            </div>
                        </div>
                        <div class="detail-box">
                            <div class="type">
                                <span id="data1">Hello</span>    
                                <span id="data2">data2</span>
                                <span>Hello</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="item-d">
                    <div class="box" >
                        <div class="slide-img" >
                            <img src="~/assets/Images/Editor_pick/brown_dress1.jpg" alt="">
                            <div class="overlay">
                                <span>choice</span>
                            </div>
                        </div>
                        <div class="detail-box">
                            <div class="type">
                                <span id="data1">Hello</span>    
                                <span id="data2">data2</span>
                                <span>Hello</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="item-e">
                    <div class="box" >
                        <div class="slide-img" >
                            <img src="~/assets/Images/Editor_pick/brown_dress1.jpg" alt="">
                            <div class="overlay">
                                <span>choice</span>
                            </div>
                        </div>
                        <div class="detail-box">
                            <div class="type">
                                <span id="data1">Hello</span>    
                                <span id="data2">data2</span>
                                <span>Hello</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>

import { slider } from '~/assets/js/slider';

export default {
    mounted(){
        slider();
    },
    data(){
        return{
            products: [
                {
                    id:1,
                    designedBy: 'MALAIKA\'S PICK',
                    img1: 'brown_dress1.jpg',
                    img2: 'brown_dress2.jpg',
                    title: 'BLACK RUST ZEBRA TIE DRESS',
                    size: ['S','M','L','XL'], 
                    price: '1,940'
                },
                {
                    id:2,
                    designedBy: 'MALAIKA\'S PICK' ,
                    img1:'green_dress1.jpg',
                    img2:'green_dress2.jpg',
                    title: 'OCEAN SELF TIE DRESS',
                    size: ['S','M','L','XL'],
                    price: '1,290'
                },
                {
                    id:3,
                    designedBy: 'BIPASHA\'S PICK',
                    img1:'earrings1.jpg',
                    img2:'earrings1.jpg',
                    title: 'GOLD TEXTURED KNOTTED HOOPS',
                    size: '',
                    price: '790'
                },
                {
                    id:4,
                    designedBy: 'BIPASHA\'S PICK' ,
                    img1:'necklace1.jpg',
                    img2:'necklace2.jpg',
                    title: 'GOLD LAYERED DROP CHAIN NACKALACE',
                    size: '',
                    price: '590'
                },{
                    id:5,
                    designedBy: 'MALAIKA\'S PICK' ,
                    img1:'white_dress1.jpg',
                    img2:'white_dress2.jpg',
                    title: 'WHITE RUFFLE YOKE DRAWSTRING TOP',
                    size: ['S','M','L','XL'],
                    price: '1,990'
                }
            ]
        }
    }
}
</script>

<style scoped>

.container{
    margin-left: 50px !important;

}

.header{
    font-size: 60px;
    letter-spacing: 0;
    font-family: 'Austin Cyr';
    font-style: normal;
    color: #000;
}

.header #part1{
    font-weight: 700;
}

.header span i{
    font-weight: 500;
    font-family:'Austin Cyr Roman';
}

.subheading{
    margin-top: -.325em;
    font-size: 13px;
    letter-spacing: .2em;
    font-family: Lato,sans-serif;
}

.image{
    height: 740px;
    width: 542px;
}

/* .product__container{
    height: 2000px;
}

.box{
    overflow: hidden;
}

.slide-img{
    height: 695px;
    width: 533px;
    position: relative;
    margin: 0!important;
}

.item-a, .item-b, .item-c, .item-d, .item-e{
    width: 535px;
    margin: 0 !important;
}

.slide-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
}

.type{
    display: flex;
    flex-direction: column;
}

.overlay{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-48%,-48%);
    width: 100%;
    height: 100%;  
} */
</style>
