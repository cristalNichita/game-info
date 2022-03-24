<template>
    <div class="app_block">
        <div class="video_wrapper">
            <h1>Последние видео</h1>

            <div class="app_block">
                <VideosList
                    :videos="getVideos"
                />
                <div class="video_see_all">
                    <button @click="$router.push('/videos')">
                        <h3>Все видео</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VideosList from "./VideosList.vue";
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
export default {
    components: { VideosList },

    methods: {
        ...mapMutations({
            setVideos: 'video/setVideos',
        }),
        ...mapActions({
            fetchVideos: 'video/fetchVideos',
        }),
    },

    computed: {
        ...mapState({
            videos: state => state.videos.videos
        }),
        ...mapGetters({
            getVideos: 'video/getVideos',
        }),
    },

    mounted() {
        this.fetchVideos();
    }
}
</script>

<style scoped>
    .video_wrapper {
        text-align: center;
    }
    .video_description {
        color: rgb(33,37,41);
        margin: 5px 0;
    }
    .video_see_all {
        margin-top: 15px;
    }
    .video_see_all button {
        border: 2px solid rgb(33,37,41);
        background: inherit;
        color: rgb(33,37,41);
        padding: 5px 50px;
        border-radius: 5px;
        cursor: pointer;
        transition: color .5s ease, background-color .5s ease;
        font-weight: 700;
        margin-top: 5px;
    }

    .video_see_all button:hover {
        color: #fff;
        background-color: rgb(33,37,41);
    }
</style>