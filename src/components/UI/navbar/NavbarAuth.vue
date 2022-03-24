<template>
    <div class="auth__btns">
        <ul>
            <li>Логин</li>
            <li>Регистрация</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .auth__btns {
        margin-left: 20px;
    }
    .auth__btns ul {
        display: flex;
        color: #fff;
    }

    .auth__btns ul li {
        padding: 20px 5px;
        cursor: pointer;
    }

    .auth__btns ul li:hover {
        background: rgb(25, 28, 31);
    }
</style>