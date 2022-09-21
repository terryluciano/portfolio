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
}
.page {
	position: absolute;
	width: 100vw;
	height: 100vh;
}
</style>
