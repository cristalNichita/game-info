<template>
    <div class="slider__wrapper">
        <Splide 
            :options="{ rewind: true }"
        >
            <SplideSlide 
                style="border-radius: 30px; overflow: hidden;" 
                v-for="item in getSliders" 
                :key="item.id"
            >
                <img 
                    :src="item.image" 
                    :alt="item.name" 
                    @click="consoleLOGG"
                >
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
    components: {
        Splide,
        SplideSlide,
    },

    methods: {
        ...mapMutations({
            setSliders: 'slider/setSliders',
        }),
        ...mapActions({
            fetchSliders: 'slider/fetchSliders',
        }),
    },

    computed: {
        ...mapState({
            sliders: state => state.slider.sliders,
        }),
        ...mapGetters({
            getSliders: 'slider/getSliders',
        }),
    },

    mounted() {
        this.fetchSliders();
    }
}
</script>

<style scoped>
    img {
        width: 100%;
    }
</style>