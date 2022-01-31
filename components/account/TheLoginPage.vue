<template>
    <div class="container">
        <div class="content__container">
            <div class="content">
                <header>
                    <h1 class="form__heading">LOGIN</h1>
                    <p class="form__subheading">Please enter your e-mail id and password:</p>
                </header>
                <div class="form__input">
                    <div class="input">
                        <input type="email" placeholder="Email">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="Password">
                    </div>
                    <div class="button">
                        <button type="submit" class="button login">LOGIN</button>
                    </div>
                    <div class="para">
                        <p>Don't have an account? <nuxt-link to='/account/register'>Create one</nuxt-link> </p>
                    </div>
                    <div class="button button1">
                        <button type="submit" class="button facebook">Sign in with Facebook<span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </span></button>
                    </div>
                    <div class="button">
                        <button type="submit" class="button google">Sign in with Google &nbsp; <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                            </svg></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container{
    margin: 110px 0 0 0!important;
    height: 780px;
    width: 1700px !important;
    background-image: url('~/assets/Images/login.jpg');
    background-size: cover;
}

.container {
    max-width: 1700px;
}

.form__heading{
    font-size: 20px;
    font-weight: normal;
    font-family: Lato,sans-serif;
    letter-spacing: .3em;
}

header{
    text-align: center;
    margin: 20px 0px 0px 15px;
}

.content__container{
    position: absolute;
    height: 420px;
    width: 400px;
    margin: 100px 0px 0px 620px;
}

.form__subheading{
    font-family: Baskerville,serif;
    font-size: 13px;
    margin-top: 10px;
}

.form__input{
    margin-top: 20px
}

input{
    padding: 12px 0px;
    width: 440px;
    border-bottom: 1px solid black;
    margin: 5px 0px;
    font-family: 'Times New Roman', Times, serif;
}

input:focus{
    outline: none;
}

.button{
    width: 440px;
    color: #fff;
}

.login{
    background-color: #000;
    padding: 13px 0px;
    margin-top: 15px ;
}

.facebook{
    background-color: #3b5998;
    padding: 10px 0px;
}

.google{
    background-color: #dd4b39;
    padding: 10px 0px;
}

button svg{
    margin-left: 210px;
}

.para{
    font-size: 12px;
    text-align: center;
    margin: 30px 0px;
}

.para p a{
    text-decoration: none;
    color: #000;
}

.button1{
    margin-bottom: 10px;
}

</style>