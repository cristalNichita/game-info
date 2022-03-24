<template>
    <li>{{ item.name }}</li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.navbar__menu ul li{
    padding: 20px 10px;
    cursor: pointer;
    transition: background-color .25s ease;
    font-weight: 700;
}

.navbar__menu ul li:hover {
    background: rgb(25, 28, 31);
}
</style>