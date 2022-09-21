<template>
	<nav>
		<router-link to="/">Welcome</router-link>
		<router-link to="/skills">Skills</router-link>
		<router-link to="/contact">Contact</router-link>
	</nav>
	<router-view v-slot="{ Component }">
		<transition name="slide">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
export default {}
</script>

<style>
nav {
	position: fixed;
	z-index: 5;
	margin: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	top: 50%;
	transform: translateY(-50%);
}
a {
	transition: all 0.25s;
	text-decoration: none;
	color: rgba(202, 168, 245, 0.5);
	font-family: "Poppins";
	font-weight: bold;
	font-size: 1.25em;
}
a:hover,
.router-link-active,
.router-link-exact-active {
	color: rgba(202, 168, 245);
}
.slide-enter-active,
.slide-leave-active {
	transition: all 1s ease-out;
}
.slide-enter-to {
	position: relative;
	left: 0;
}
.slide-leave {
	position: absolute;
}
.slide-enter {
	left: -100vw;
	position: absolute;
}
.slide-leave-to {
	right: -100vw;
}
</style>
