<template>
    <li>
        {{ item.name }}
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
    li {
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        padding: 2px 10px;
        display: inline-block;
        border-radius: 5px;
        transition: background-color .5s ease, color .5s ease;
    }

    li:hover {
        background: #fff;
        color: rgb(33, 37, 41);
    }
</style>