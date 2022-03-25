<template>
    <div class="news__wrapper black_background">
        <div class="container">
            <div class="app_block">
                <h1>Последние новости</h1>
            </div>
            <div class="app_block">
                <NewsCategories/>
            </div>
            <div class="app_block">
                <NewsList
                    :news="getNews"
                />
            </div>
        </div>
        <div class="app_block">
            <div class="all_news_btn_wrapper">
                <button 
                    class="all_news_btn" 
                    @click="$router.push('/news')"
                >
                    <h3>Все новости</h3>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import NewsCategories from "./NewsCategories.vue";
import NewsList from "./NewsList.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
    components: { 
        NewsCategories, 
        NewsList 
    },

    methods: {
        ...mapMutations({
            setNews: 'news/setNews',
        }),
        ...mapActions({
            fetchNews: 'news/fetchNews',
        })
    },

    computed: {
        ...mapState({
            news: state => state.news.news,
        }),
        ...mapGetters({
            getNews: 'news/getNews'
        }),
    },

    mounted() {
        this.fetchNews();
    }
}
</script>

<style scoped>
    .news__wrapper {
        padding: 10px;
    }
    .app_block h1 {
        text-align: center;
        color: #fff;
    }
    .all_news_btn_wrapper {
        text-align: center;
        margin-bottom: 10px;
    }
    .all_news_btn {
        border: 2px solid #fff;
        background: inherit;
        color: #fff;
        padding: 5px 50px;
        border-radius: 5px;
        cursor: pointer;
        transition: color .5s ease, background-color .5s ease;
        font-weight: 700;
    }
    .all_news_btn:hover {
        color: rgb(33,37,41);
        background-color: #fff;
    }
</style>