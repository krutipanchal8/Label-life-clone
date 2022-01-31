<template>
    <div class="header__container">
        <header>
            <span id="part1">{{ firstname }} </span><span id="part2"> {{ secondname }}</span><span id="part3"> by </span><span id="part4">  {{ lastpart }}</span>
        </header>
        <div class="header">
            <div class="content">
                <span class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                    </svg>
                </span>
                <span class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                        <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                    </svg>
                </span>
                <span class="right__side">
                    <button @click="openNav()">FILTER</button>
                </span> 
            </div> 
        </div>
        <div id="mySidenav" class="sidenav" v-bind:style="{ width: toggleNavbar ? '430px' : '0px' }" v-show="toggleNavbar">
            <div class="sidemenu__header">
                <span id="title">FILTER</span>
                <span id="sign" @click="closeNav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-x-md" viewBox="0 0 16 16">
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                </span>
            </div>
            <div class="fabric__container">
                <div class="title">
                    <span>FABRIC</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                </div>
                <div class="fabrics checkbox" v-for="(fabric,key) in getFabrics" :key=key >
                    <input type="checkbox" :value="fabric.name" :id="key" @click="getFabric({event: $event,name:fabric.name})">
                    <label :for="key">{{ fabric.name }}</label>
                </div>
            </div>
            <div class="fit_guide__container">
                <div class="title">
                    <span>FIT GUIDE</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                </div>
                <div class="fabrics checkbox" v-for="(fitGuide,key) in getFitGuides" :key=key >
                    <input type="checkbox" :value="fitGuide.name" :id="key" @click="getFitGuide({event:$event,name:fitGuide.name}) ">
                    <label :for="key">{{ fitGuide.name }}</label>
                </div>
            </div>
            <div class="dress_length__container">
                <div class="title">
                    <span>LENGTH</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                </div>
                <div class="length checkbox" v-for="(dressLength,key) in getDressLengths" :key=key >
                    <input type="checkbox" :value="dressLength.name" :id="key" @click="getDressLength({event:$event,name:dressLength.name})">
                    <label :for="key">{{ dressLength.name }}</label>
                </div>
            </div>
            <div class="price__container">
                <div class="title">
                    <span>PRICE</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                </div>
                <div class="length checkbox" v-for="(priceDetail,key) in getPriceDetails" :key=key >
                    <input type="checkbox" :value="priceDetail.name" :id="key" @click="getPriceDetail({event:$event,name:priceDetail.name})">
                    <label :for="key">{{ priceDetail.name }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {  mapMutations, mapGetters } from 'vuex';

export default {
    props : [ 'firstname','secondname','lastpart'],
    computed:{
        ...mapGetters("products",['getFabrics','getFitGuides','getDressLengths','getPriceDetails'])
    },
    methods:{
        openNav(event){
            this.toggleNavbar = !this.toggleNavbar;
        },
        closeNav(event){
            this.toggleNavbar = !this.toggleNavbar;
        },
        ...mapMutations("products",['getFabric','getFitGuide','getDressLength','getPriceDetail'])
    },
    data(){
        return{
            toggleNavbar: false,
        }
    }
}
</script>

<style scoped>

header{
    font-family: 'Austin Cyr';
    /* line-height: 100%; */
    height: 165px;
    margin: 150px 0 0px 50px !important;
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

#part3{
    font-size: 12px;
    font-style: italic;
}

#part4{
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: normal;
}

.header{
    height: 50px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
}

.content{
    padding-left: 30px;
}

span svg{
    height: 22px;
    width: 22px;
    margin-left: 6px;
    margin-top: 13px;
}

.right__side button{
    position: absolute;
    padding: 11px 56px;
    background-color: #000;
    color: #fff;
    right: 0;
    font-size: 17px;
    cursor: pointer;
    letter-spacing: .9px;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  color: #fff;
  background-color: rgba(0,0,0,0.7);
  overflow-x: hidden;
  transition: 0.5s;
}

#sign{
    cursor: pointer;
    right: 0;
    margin-left: 120px ;
}

#sign svg{
    height: 14px;
    width: 14px;
}

.sidemenu__header{
    margin-top:20px ;
}

.sidemenu__header #title{
    letter-spacing: 2px;
    margin-left: 180px;
}

.title{
    margin: 20px 0px;
    text-align: center;
    font-weight: normal;
    letter-spacing: .1em;
    font-size: 15px;
}

.title svg{
    margin-left:  300px;
}

input[type="checkbox"]{
    zoom:1.3;
    margin-right:5px;
    padding-top: 5px ;
    border: 1px solid #000;
}

.checkbox{
    margin:5px 0px 0px 20px;
    font-size:14px; 
}

</style>