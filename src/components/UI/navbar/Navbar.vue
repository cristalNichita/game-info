<template>
    <div class="navbar-wrapper black_background">
        <div class="navbar container">
            <div 
                class="navbar__brand" 
                @click="$router.push('/')"
            >
                <span>G</span>Check
            </div>
            <div class="navbar__menu">
                <ul>
                    <NavbarMenu
                        v-for="item in $router.options.routes" 
                        :item="item"
                        :key="item.path"
                    />
                </ul>
            </div>
            <NavbarAuth/>
        </div>
    </div>
</template>

<script>
import NavbarMenu from "./NavbarMenu.vue";
import NavbarAuth from "./NavbarAuth.vue";
export default {
    components: { NavbarMenu, NavbarAuth }
}
</script>

<style scoped>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
    }
    .navbar__brand {
        font-size: 24px;
        color: #fff;
        margin-right: 10px;
        cursor: pointer;
    }

    .navbar__brand span{
        background: #fff;
        color: rgb(33,37,41);
        font-weight: 700;
        padding: 0 5px;
        border-radius: 5px;
    }

    .navbar__menu ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
    }
</style>