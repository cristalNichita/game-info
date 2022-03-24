<template>
    <div class="loading_background">
        <div class="loading_wrapper">
            <div class="loading"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.loading_background {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 9999;
    width: 100%;
    height: 100vh;
}
.loading_wrapper {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
	display: flex;
	justify-content: center;
}
.loading {
	width: 100px;
	height: 100px;
    border: 7px solid rgb(33,37,41);
    animation: loading .8s infinite linear;
}

@keyframes loading {
    0% {
        transform: rotate(0deg) scale(1);
        border-radius: 50px
    }
    25% {
        border-radius: 25px;
    }
    50% {
        transform: rotate(180deg) scale(1.4);
        border-radius: 50px
    }
    75% {
        border-radius: 25px;
    }
    100% {
        transform: rotate(360deg) scale(1);
        border-radius: 50px;
    }
}
</style>