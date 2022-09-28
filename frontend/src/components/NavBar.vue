<template>
	<nav>
		<router-link to="/">Welcome</router-link>
		<router-link to="/skills">Skills</router-link>
		<router-link to="/projects">Projects</router-link>
		<router-link to="/contact">Contact</router-link>
	</nav>
	<router-view> </router-view>
</template>

<script>
export default {
	name: "NavBar"
}
</script>

<style>
nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	margin: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
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
	text-shadow: -2px 2px rgba(69, 69, 69, 0.5);
}
</style>
