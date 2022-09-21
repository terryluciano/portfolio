<template>
	<div id="home-page" class="page">
		<PurpleBubble v-for="index in numberOfBubbles" :key="index" />
		<div class="background-c">
			<WelcomeCard
				:title="title"
				:subTitle="subTitle"
				:description="description"
			/>
		</div>
	</div>
</template>

<script>
import WelcomeCard from "@/components/WelcomeCard.vue"
import PurpleBubble from "@/components/PurpleBubble.vue"

export default {
	data() {
		return {
			title: "Terrence Luciano",
			subTitle: "Full-Stack Web Developer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum nisl auctor gravida nulla facilisis sed nibh lorem lacus. Pharetra neque vulputate venenatis eget tincidunt nulla tincidunt. Magna risus mauris ornare commodo. Sollicitudin a vitae et netus erat interdum.",
			numberOfBubbles: 25
		}
	},
	name: "HomeView",
	components: {
		WelcomeCard,
		PurpleBubble
	}
}
</script>

<style>
#home-page {
	background: url(@/assets/backgroundv2.png) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	padding: 0;
	margin: 0;
	overflow: hidden;
}
.background-c {
	background-color: rgba(35, 12, 51, 0.5);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	height: 100vh;
}
p {
	margin: 0;
}
</style>
