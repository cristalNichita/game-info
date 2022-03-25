<template>
    <div class="news__categories">
        <ul>
            <li class="active">Все</li>
            <li>Игровые</li>
            <li>Киберспорт</li>
            <li>Скидки</li>
            <li>Железо</li>
            <li>Топ</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        newsCategories: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
    .news__categories {
        border-bottom: 2px solid #fff;
    }
    .news__categories ul {
        display: flex;
        justify-content: center;
    }
    .news__categories li {
        color: #fff;
        cursor: pointer;
        padding: 5px 10px;
        transition: background-color .5s ease, color .5s ease;
        font-weight: 700;
        border-radius: 5px 5px 0 0;
    }
    .news__categories li:hover {
        background: #fff;
        color: rgb(33,37,41);
    }

    .news__categories li.active {
        color: rgb(33,37,41);
        background: #fff;
    }

</style>