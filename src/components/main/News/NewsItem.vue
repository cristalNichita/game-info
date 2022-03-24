<template>
    <div class="news_item_wrapper" 
        @click="$router.push(`/news/${item.id}`)"
    >
        <div class="news_img_wrapper">
            <img 
                :src="item.image" 
                :alt="item.title"
            >
        </div>
        <div class="news_content_wrapper">
            <div class="news_date_wrapper">
                <h6>{{ item.date }}</h6>
            </div>
            <div class="news_title_wrapper">
                <h3>{{ item.title }}</h3>
            </div>
            <div class="news_descr_wrapper">
                <h5>{{ item.description }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    .news_item_wrapper {
        margin: 0 5px;
        flex-basis: 25%;
        border: 2px solid #fff;
        border-radius: 10px;
        padding: 5px;
        cursor: pointer;
        color: #fff;
        background: inherit;
        transition: background-color .5s ease, color .5s ease;
    }
    .news_item_wrapper:hover {
        background: #fff;
        color: rgb(33,37,41);
    }
    .news_img_wrapper {
        height: 160px;
        overflow: hidden;
    }
    .news_img_wrapper img {
        width: 100%;
        border-radius: 5px;
    }
    .news_date_wrapper {
        border-bottom: 1px solid #fff;
        padding-bottom: 5px;
    }
    .news_title_wrapper {
        margin-top: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #fff;
    }
</style>