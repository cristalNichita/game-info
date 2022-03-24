<template>
    <div class="videos_wrapper">
        <VideoItem 
            v-for="video in videos" 
            :key="video.id" 
            :video="video" 
        />
    </div>
    
</template>

<script>
import VideoItem from "./VideoItem.vue";
export default {
    components: { VideoItem },
    props: {
        videos: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
    .videos_wrapper {
        display: flex;
    }
</style>