<template>
    <div>
        <div class="container">
            <div class="app_block">
                <Slider/>
            </div>
        </div>
        <div class="app_block">
            <News/>
        </div>
        <div class="container">
            <div class="app_block">
                <Videos/>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import News from "@/components/News/News.vue";
import Videos from "@/components/Videos/Videos.vue";

export default {
    components: {
        Slider,
        News,
        Videos
    }
}
</script>

<style scoped>
    
</style>