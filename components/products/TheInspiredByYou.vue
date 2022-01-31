<template>
    <div class="main__container">
        <div class="container">
            <div class="title">
                <div class="header">
                    <span id="part1">Inspired by</span><span><i> you</i></span>
                </div>
                <div class="subheading">
                    <span><u>SHOP</u> YOUR INSTAGRAM FAVOURITES</span>
                </div>
            </div>
        </div>
        <div class="details">
            <div class="details__container" v-for="(person,key) in people" :key=key>
                <div class="image__container">
                    <img :src="require(`~/assets/Images/Inspired-by/${person.img}`)" alt="">
                </div>
                <div class="tag__container">
                    <span>{{ person.instaTag }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            people: [
                {
                    id:1,
                    img: 'image1.jpg',
                    instaTag: '@styleflairbysakshi'
                },
                {
                    id:2,
                    img: 'image2.jpg',
                    instaTag: '@justgirlandherblog'
                },
                {
                    id:3,
                    img: 'image3.jpg',
                    instaTag: '@rubeensingh'
                },
                {
                    id:4,
                    img: 'image4.jpg',
                    instaTag: '@saloni_acharya_mua'
                },
                {
                    id:5,
                    img: 'image5.jpg',
                    instaTag: '@imagemundial'
                },
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

.details{
    margin: 20px 5px 20px 13px;
}

.details__container{
    display: inline-block;
    margin-right: 4px;
}

img{
    height: 320px;
    width: 329px;
}

.tag__container{
    cursor: pointer;
    font-family: Baskerville;
    font-size: 13px;
    font-style: italic;
    letter-spacing: .5px;
    margin: 8px 0px;
}
</style>
