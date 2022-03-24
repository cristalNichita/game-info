<template>
    <div class="footer_socials_title">
        <span>Поддержи</span> подписавшись
    </div>
    <div class="footer_socials_content">
        <ul>
            <FooterSocialsContent/>
        </ul>
    </div>
</template>

<script>
import FooterSocialsContent from "./FooterSocialsContent.vue";
export default {
    components: { FooterSocialsContent }
}
</script>

<style scoped>
    .footer_socials_title {
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        border-bottom: 2px solid #fff;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .footer_socials_title span {
        background: #fff;
        color: rgb(33,37,41);
        font-weight: 700;
        padding: 0 5px;
        border-radius: 5px;
    }
    .footer_socials_content ul{
        display: flex;
        justify-content: space-evenly;
    }
</style>