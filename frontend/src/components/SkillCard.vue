<template>
	<div class="skill-card">
		<h2>{{ cardTitle }}</h2>
		<p>{{ cardDetails }}</p>
	</div>
</template>

<script>
export default {
	props: {
		cardTitle: String,
		cardDetails: String
	},
	name: "SkillCard"
}
</script>

<style>
.skill-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	gap: 10px;
	position: relative;
	width: 400px;
	height: 200px;
	background: #caa8f5;
	border-radius: 20px;
	transition: all 0.25s ease;
}

.skill-card h2 {
	margin: 0px;
	font-family: "Reem Kufi Ink";
	font-size: 1.5em;
}

.skill-card p {
	margin: 0px;
	font-family: "Poppins";
	text-align: justify;
}

.skill-card:hover {
	transform: scale(1.05);
}
</style>
