<template>
    <div class="one_video">
        <div 
            style="border-radius: 10px; overflow: hidden;" 
            v-html="video.body"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        video: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    .one_video {
        flex-basis: 50%;
        padding: 5px 5px;
        border: 2px solid rgb(33,37,41);
        border-radius: 10px;
        margin: 0 5px;
    }

    .one_video div * {
        height: 100%;
    }
</style>