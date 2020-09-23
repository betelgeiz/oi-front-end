<template>
    <div class="auth">
        <div class="bg">
            <div class="grid"></div>
            <!-- <img src="../assets/bg.jpg" alt=""> -->
        </div>
        <router-view />
    </div>
</template>

<style>
.auth {
    background: #eaeaea;
    height: 100vh;
    width: 100%;
    position: absolute;
    background-image: url(../assets/bg.jpg);
    background-position: center center;
  
    background-repeat: no-repeat;
    
    background-attachment: fixed;
    
    /* Изменение размера картинки, в зависимости от экрана */
    background-size: cover;
}

.bg {
    position: absolute;
    width: 100%;
}

.bg .grid {
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    position: absolute;
}

.bg img {
    width: 100%;
}

</style>