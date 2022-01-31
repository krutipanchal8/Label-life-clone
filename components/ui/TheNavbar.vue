<template>
    <div class="navbar">
        <div class="announcementbar__container">
            <div class="announcementbar__heading">
                <p class="announcementbar__contant heading">
                    <nuxt-link to='/collections/new-arrivals'>
                        BRIGHTEN UP YOUR LOOK WITH NEW | SHOP NOW
                    </nuxt-link> 
                </p>
            </div>
        </div>
        <nav class="nav">
            <div class="container">
                <div class="nav__container">
                    <div class="nav__left flex__item">
                        <span class="logo">
                            <nuxt-link to='/'>
                            <img src="~/assets/Images/logo.png">
                            </nuxt-link>
                        </span>
                    </div>
                    <div class="nav__center flex__item">
                        <div>
                            <ul>
                                <li class="">
                                    <nuxt-link to='/'>
                                        <span class="nav__heading">NEW</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to='/'>
                                        <span class="heading1">Cheerful</span>
                                        <span class="heading2">Prints</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to='/'>
                                        <span class="nav__heading">CLOTHING</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to='/'>
                                        <span class="nav__heading">SHOES</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to='/'>
                                        <span class="nav__heading">ACCESSORIES</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to='/'>
                                        <span class="nav__heading">HOME</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to='/'>
                                        <span class="nav__heading">COLLECTIONS</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to='/'>
                                        <span class="nav__heading sale">SALE</span>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav__right flex__item">
                        <ul>
                            <li class="header__icon">
                                <nuxt-link to='/account/login'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                </nuxt-link>
                            </li>
                            <li class="header__icon">
                                <nuxt-link to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </nuxt-link>
                            </li>
                            <li class="header__icon">
                                <nuxt-link to='/cart'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                    </svg>
                                </nuxt-link>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TheNavbar'
}
</script>

<style scoped>

.announcementbar__container{
    text-align: center;
    font-size: 10px;
    height: 42px;
    background-color: #f7f7f7;
}

.announcementbar__heading{
    width: 100%;
    padding: 13px 0px;
}

.heading {
    font-style: normal;
    color: #000;
    transition: color .2s ease-in-out;
    letter-spacing: .2em;
}

.navbar{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 9999; */
}

.nav{
    background: #fff;
    color: #1c1b1b;
    box-shadow: 0 -1px #ddd inset;
    display: flex;
    align-items: center;
    height: 78px;
    justify-content: space-between;
}

.container{
    padding: 13px 50px;
    width: 1700px;
    margin: 0 !important;
}

.navbar__container{
    display: inline;
}

ul li{
    list-style: none;
    display: inline;
}

.container {
    max-width: 1687px;
}

.nav__container{
    display: flex;
    align-items: center;
    width: 100%; 
    justify-content: space-between;
}

.nav__heading{
    font-size: 12px;
    font-weight: 500!important ;
    color: #1c1b1b;
    letter-spacing: .2em;
}

.heading1{
    font-family: 'Austin Cyr';
    font-weight: 700!important;
    font-size: 18px;
    line-height: 100%;
    color: #1c1b1b;
    letter-spacing: normal;    
}

.heading2 {
    font-family: 'Austin Cyr Roman';
    font-style: italic;
    font-weight: 500!important;
    font-size: 21px;
    line-height: 100%;
    letter-spacing: normal;
    font-weight: 400;
}

svg{
    color: black;
    margin: 10px;
}

.nav__heading{
    margin: 6px 27px;
}

.sale{
    color: #f94c43;
}

</style>