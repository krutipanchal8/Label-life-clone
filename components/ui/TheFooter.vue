<template>
    <footer>
        <div class="section__footer">
            <div class="section__content">
                <div class="row">
                    <div class="col-4 col-1">
                        <center>
                        <ul>
                            <li class="column1">Our Story</li>
                            <li class="column1">FAQ</li>
                            <li class="column1">Request A Return</li>
                            <li class="column1">Track Your Order</li>
                            <li class="column1">Store: Kolkata</li>
                        </ul>
                        </center>
                    </div>
                    <div class="col-4 col-2">
                        <center><img src="~/assets/logo2.svg" alt=""></center>
                    </div>
                    <div class="col-4 col-3">
                        <center>
                        <ul>
                            <li class="column2"><strong>EMAIL: </strong><span class="details"><u>help@thelabellife.com</u></span></li>
                            <li class="column2"><strong>CALL: </strong><span class="details">+91 22 4890 0137</span></li>
                            <li class="column2"><strong>WHATSAPP: </strong><span class="details">+91 9967194040</span></li>
                            <li class="column2"><span id="note"><i>please note, owing to COVID-19 our response time will be longer than usual.</i></span></li>
                        </ul>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>


.section__footer{
    width: 1690px;
    height: 390px;
    padding: 65px 0px;
    background-image: url('https://cdn.shopify.com/s/files/1/0329/7499/5591/files/TLL_website_footer_back.png?v=1591808676');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}

.section__content{
    background-color: white;
    margin: 0px 55px;
    height: 280px;
}

ul li{
    list-style: none;
}

.row{
    height: 280px;
    width: 1400px;
    padding: 20px 30px;
    margin-left: 80px;
}

.col-4{
    width: 346px;
    height: 156px;
    padding-top: 40px ;
}

.col-4 img{
    height: 51px;
    width: 42px;
    margin: 50px 0px 0px 50px;
}

.column1{
    display: block;
    margin-bottom: 12px;
    font-size: 12px;
    width: 100%;
    font-family: Baskerville,serif;
    line-height: 1.5;
}

.details{
    font-weight: normal;
    font-size: 12px;
}

.column2{
    margin-left: 40px;
    margin-bottom: 12px ;
}

.column2 strong{
    font-family: Lato,sans-serif;
    letter-spacing: .2em;
    font-size: 12px;
}

#note{
    font-size: 12px;
    font-weight: 400;
    font-family: Baskerville,serif;
}

</style>