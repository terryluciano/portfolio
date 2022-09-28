<template>
	<NavBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
	components: {
		NavBar
	}
}
</script>

<style>
#app {
	margin: 0;
}

html {
	margin: 0;
	font-size: 16px;
}

body {
	margin: 0;
	background-color: #230c33;
}
.page {
	position: absolute;
	width: 100vw;
	height: 100vh;
}
.background-c {
	background-color: rgba(35, 12, 51, 0.5);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(4px);
}
</style>
