<template>
	<div class="container">
		<div class="left">
			<router-link to="/Aa">点击切换到Aa</router-link>
			<router-link to="/Bb">点击切换到Bb</router-link>
		</div>
		<div class="right">
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Aa from "./pages/Aa.vue";
import Bb from "./pages/Bb.vue";
import BbCc from "./pages/BbCc.vue";
import BbDd from "./pages/BbDd.vue";

export default {
	name: "App",
	components: {
		Aa,
		Bb,
		BbCc,
		BbDd,
	},
	methods: {},
};
</script>

<style>
.container {
	position: relative;
	width: 900px;
	margin: 0 auto;
}
.container::after {
	display: block;
	clear: both;
	content: "";
}
.left,
.right {
	position: relative;
	float: left;
	width: 300px;
	height: 500px;
	background-color: cornflowerblue;
	color: wheat;
}
.right {
	background-color: gray;
}
.left * {
	display: block;
	width: 100%;
	height: 200px;
}
</style>
