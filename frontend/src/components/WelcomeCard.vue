<template>
	<div class="welcome-card">
		<h2>{{ title }}</h2>
		<h3 v-if="subTitle != undefined">{{ subTitle }}</h3>
		<p>{{ description }}</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		subTitle: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: true
		}
	}
}
</script>

<style>
.welcome-card {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	gap: 0px;
	justify-content: center;
	align-items: center;
	background: rgba(202, 168, 245, 0.5);
	color: white;
	padding: 50px 100px;
	border-radius: 20px;
	text-align: center;
	font-family: "Reem Kufi Ink";
}
.welcome-card h2 {
	margin: 0px;
	font-size: 2em;
}
.welcome-card h3 {
	margin: 0px;
	font-size: 1.5em;
}
.welcome-card p {
	margin: 10px 0px 0px 0px;
	font-family: "Poppins";
	max-width: 400px;
}
</style>
