<template>
<div>
  <div class="carousel__block">
    <v-carousel 
      :z-index=-9999
      :show-arrows="false" 
      :cycle="true" 
      :height="748" 
      hide-delimiter-background
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        class="fade-in-image"
      >
      <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <div class="slidshow__contant">
          <div class="main__title">
            {{ item.title }}
          </div>
          <div class="another__title">
            {{ item.subtitle }}
          </div>
        </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="marquee__section">
    <div>
      <marquee loop="infinite" scrolldelay="90">
        This thoughtfully curated prints from our new collection are sure to bring you joy. click <strong>here.</strong>
        <img src="~/assets/logo2.svg">
        This thoughtfully curated prints from our new collection are sure to bring you joy. click <strong>here.</strong>
        <img src="~/assets/logo2.svg">
        This thoughtfully curated prints from our new collection are sure to bring you joy. click <strong>here.</strong>
        <img src="~/assets/logo2.svg">
        This thoughtfully curated prints from our new collection are sure to bring you joy. click <strong>here.</strong>
        <img src="~/assets/logo2.svg">
      </marquee>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('~/assets/Images/carousel/image1.jpg'),
            title: 'To Have & To Hold',
            subtitle: 'EXPLORE ELEVATED NEW BAGS'
          },
          {
            src: require('~/assets/Images/carousel/image2.jpg'),
            title: 'All-day-comfy Tops',
            subtitle: 'EXPLORE TERRIFIC TOPS'
          },
          {
            src: require('~/assets/Images/carousel/image3.jpg'),
            title: '',
            subtitle: '',
          },
          {
            src: require('~/assets/Images/carousel/image4.jpg'),
            title: 'Go for Gold',
            subtitle: 'DISCOVER JOYFUL NEW JEWELLERY'
          },
          {
            src: require('~/assets/Images/carousel/image5.jpg'),
            title: 'Dreamy dressing',
            subtitle: 'SHOP NEW ARRIVALS'
          },
        ],
      }
    },
  }
</script>

<style scoped>

.fade-in-image  {
  animation: fadeIn 3s;
  -webkit-animation: fadeIn 3s;
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

.carousel__block{
  margin-top: 120px;
  z-index: -9999;
}

.slidshow__contant{
  position: absolute;
  width: 100%;
  left: 50%;
  top:50%;
  animation-name: slideshow;
  animation-duration: 3s;
  transform: translate(-50%,-50%);
  text-align: center;
  color: #fff;
}

@keyframes slideshow {
  0%{
    display: none;
  }
  2%{
    top:60%;
  }
  75%{
    top: 50%;
  }
}
.main__title{
  font-family: 'Austin Cyr';
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  text-transform: none;
  letter-spacing: normal;
}

.another__title{
  font-weight: 500;
  font-size: 15px;
  line-height: 60px;
  letter-spacing: .2em;
  transition: color .2s ease-in-out;
}

marquee img{
  height: 18px;
  width: 17px ;
}

marquee {
    padding: 25px 0;
    font-family: Baskerville,serif;
    letter-spacing: .19px;
    font-size: 18px;
}

</style>