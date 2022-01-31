<template>
    <div class="main__container">
        <div class="container">
            <div class="title">
                <div class="header">
                    <span id="part1">9am - 9pm</span>
                </div>
                <div class="subheading">
                    <span><u>SHOP</u> STYLES BY SUSSANE, MALAIKA & BIPASHA</span>
                </div>
            </div>
        </div>
        <div class="video__container">
            <iframe class="video"
                src="https://www.youtube.com/embed/jwu0Z852mPY?autoplay=1&amp&amp;mute=1&controls=0&amp&amp;showinfo=0&amp;modestbranding=1">
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    
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

.video{
    width: 100%;
    height: 850px;
}

</style>