<template>
    <div class="container">
        <div class="category__container" v-for="(category,key) in categories" :key=key>
        <nuxt-link :to='{ path: `/collections/${category.title}` , query: { name: `${category.name}`} }'>
            <div class="image__container">
                <img :src="require(`~/assets/Images/Designed_by/${category.image}`)" alt="">
            </div>
            <div class="details__container">
                <div class="main__title">
                    {{ category.title }}
                </div>
                <div class="sub__title">
                   <span id="part1">by</span><span  id="part2"> {{ category.name }}</span> 
                </div>
            </div>
        </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categories:[
                {
                    id:1,
                    image: 'Sussanne.png',
                    title: 'Darling Dresses',
                    name: 'SUSSANNE'
                },
                {
                    id:2,
                    image: 'Malaika.png',
                    title: 'Tailored Tops',
                    name: 'MALAIKA'
                },
                {
                    id:3,
                    image: 'Bipasha.png',
                    title: 'Smart Shoes',
                    name: 'BIPASHA'
                }
            ]
        }
    },
}
</script>

<style scoped>

.container{
    margin: 50px 263px 0px 300px;
}

.category__container{
    display: inline-block;
}

.category__container{
    margin: 0px 48px 31px 48px;
    cursor: pointer;
}

img{
    height: 268px;
    width: 268px;
}

.details__container{
    font-family: 'Austin Cyr';
    line-height: 30px;
    letter-spacing: .6px;
    color: #000;
    text-align: center;
    margin-top: 30px;
}

.main__title{
    font-size: 30px;  
    font-weight: 700;  
}

#part1{
    font-size: 22px;
    font-style: italic;
}

#part2{
    font-size: 17px;
    letter-spacing: 1px;
    font-family: Helvetica;
}
</style>