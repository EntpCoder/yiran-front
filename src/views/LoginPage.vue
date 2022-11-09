<template>
    <!-- ===========头部导航============ -->
    <div class="nav">
        <router-link to="/" class="nav-index">
            <img class="logo" src="/images/logo.png" />
        </router-link>
        <i class="nav-san"></i>
    </div>
    <!-- =============登录====================== -->
    <div class="login-bg">


        <div class="login-panel">
            <!-- 登录注册 -->
            <div class="login-head">
                <router-link class="duanxin-login" to="/login/mobile">短信验证登录</router-link>
                <i class="a">|</i>
                <router-link class="acc-login" to="/login/account">账户登录</router-link>
            </div>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

/* ===============头部导航================== */
.nav {
    position: relative;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    width: 1000px;
    height: 100px;
    zoom: 1;
    /* border: 1px solid; */
}

.nav .nav-san {
    background-image: url("/images/maodian.png");
    background-position: 0 0;
    width: 304px;
    height: 100px;
    position: absolute;
    /* border: 2px solid; */
    top: 0;
    right: 0;
    z-index: 1;
}

/* ===========================登录背景========================= */

.login-bg {
    /* border: 1px solid; */
    width: 100%;
    height: 650px;
    background-image: url("../images/login-bg.jpg");
    background-position: top center;
    background-repeat: no-repeat;
}

/* =====================登录框=================== */
.login-bg .login-panel {
    position: absolute;
    width: 360px;
    height: 500px;
    background-color: #fff;
    margin-top: 50px;
    margin-left: 900px;
}

/* ==============账户登录 ===============*/
.login-bg .login-panel .login-head {
    width: 360px;
    height: 50px;
    border-bottom: 1px solid #ccc;
}

.login-bg .login-panel .duanxin-login {
    width: 178px;
    vertical-align: top;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 50px;
    overflow: hidden;
    color: #575557;
    cursor: default;
    float: left;
    cursor: pointer;
}

.login-bg .login-panel .a {
    width: 2px;
    height: 50px;
    float: left;
    font-size: 25px;
    margin-top: 10px;
    color: #ccc;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.login-bg .login-panel .acc-login:hover {
    color: #f10180;
}

.login-bg .login-panel .duanxin-login:hover {
    color: #f10180;
}

.login-bg .login-panel .acc-login {
    display: block;
    width: 178px;
    /* border: 1px solid; */
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 50px;
    overflow: hidden;
    color: #575557;
    cursor: default;
    text-decoration: none;
    float: right;
    cursor: pointer;
}

.logo {
    width: 200px;
    height: 100px;
}
</style>