<template>
    <div class="sidemenu__container" >
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                </span>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        openNav(){
            this.toggleNavbar = !this.toggleNavbar;
        },
        closeNav(){
            this.toggleNavbar = !this.toggleNavbar;
            console.log(this.toggleNavbar)
        }
    },
    data(){
        return{
            toggleNavbar: false,
            activeClass : 'overlay',
            deactiveClass: 'regular',
            
        }
    }
}
</script>

<style scoped>

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
  background-color: rgb(0,0,0);
  overflow-x: hidden;
  transition: 0.5s;
}

#sign{
    cursor: pointer;
}

.sidemenu__header{
    margin: 30px ;
}


</style>