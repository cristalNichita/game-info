<template>
	<Navbar/>
	<div class="app">
		<router-view></router-view>
	</div>
	<div class="app_block">
		<Footer/>
	</div>
    <Loading v-if="loadPage" />
</template>

<script>
import Navbar from "@/components/UI/navbar/Navbar.vue";
import Footer from "@/components/UI/footer/Footer.vue";
import Loading from "@/components/UI/components/Loading.vue";

export default {
	components: {
		Navbar,
		Footer,
		Loading,
	},

	data() {
		return {
            loadPage: true,
		}	
	},
	
    created() {
        window.addEventListener('load', () => this.loadPage = false);
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: sans-serif;
}

.container {
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;
}

.app_block{
	margin-top: 20px;
}

ul {
	padding: 0;
	margin: 0;
	list-style: none;
}

.black_background {
	background: rgb(33,37,41);
}
</style>