<template>
    <div class="footer_block_wrapper">
        <FooterLogo/>
        <ul>
            <FooterMenu 
                v-for="item in $router.options.routes"
                :key="item.id"
                :item="item"
            />
        </ul>
    </div>
    <div class="footer_block_wrapper">
        <FooterSocialsList/>
    </div>
</template>

<script>
import FooterMenu from "./FooterMenu.vue";
import FooterLogo from "./FooterLogo.vue";
import FooterSocialsList from "./FooterSocialsList.vue";
export default {
    components: { FooterMenu, FooterLogo, FooterSocialsList }
}
</script>

<style scoped>
    
</style>