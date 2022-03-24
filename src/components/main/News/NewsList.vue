<template>
    <div class="news_block_wrapper">
        <NewsItem 
            v-for="item in news" 
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script>
import NewsItem from "./NewsItem.vue";
export default {
    components: { 
        NewsItem 
    },
    props: {
        news: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
    .news_block_wrapper {
        display: flex;
        justify-content: space-between;
    }
</style>