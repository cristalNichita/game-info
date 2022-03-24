<template>
    <div class="footer black_background">
        <div class="container">
            <div class="footer_content">
                <FooterContent/>
            </div>
        </div>
        <div class="footer_copy_line"></div>
        <div class="copyright">
            Copyright © GCheck. All rights reserved. 2022.
        </div>
    </div>
</template>

<script>
import FooterContent from "./FooterContent.vue";

export default {
    components: {
    FooterContent,
}
}
</script>

<style scoped>
    .footer_content {
        display: flex;
        padding: 50px;
        justify-content: space-around;
    }
    .footer_subscribe_wrapper {
        text-align: center;
    }
    .footer_copy_line {
        width: 100%;
        height: 2px;
        background: #fff;
    }
    .copyright {
        text-align: center;
        color: rgb(102, 102, 102);
        padding: 10px;
    }
</style>