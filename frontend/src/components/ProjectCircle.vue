<template>
	<div
		ref="projectCircle"
		class="project-circle"
		:style="{
			'background-image': 'url(' + projectImgLink + ')'
		}"
	>
		<h2>{{ projectTitle }}</h2>
		<p>{{ projectDescription }}</p>
		<div class="external-url" v-if="isRepo">
			<a :href="githubRepo">GitHub</a>
		</div>
		<div class="external-url" v-if="isWebsite">
			<a :href="projectWebsite"> {{ projectTitle }}'s Website </a>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity"
export default {
	props: {
		projectImgLink: {
			type: String,
			required: false
		},
		projectTitle: {
			type: String,
			required: true
		},
		projectDescription: {
			type: String,
			required: true
		},
		githubRepo: {
			type: String,
			required: false
		},
		projectWebsite: {
			type: String,
			required: false
		}
	},
	setup(props) {
		const projectCircle = ref(null)

		const isRepo = props.githubRepo != undefined
		const isWebsite = props.projectWebsite != undefined

		console.log(isRepo)
		console.log(isWebsite)

		return {
			projectCircle,
			isRepo,
			isWebsite
		}
	},
	name: "ProjectCircle"
}
</script>

<style>
.project-circle {
	border-radius: 50%;
	position: absolute;
	width: 400px;
	height: 400px;
	background: no-repeat center center fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	gap: 5px;
}
.project-img {
}
.external-url {
	padding: 10px;
	border: 1px #000 solid;
	border-radius: 10px;
	background-color: #caa8f5;
}
.external-url a {
	font-size: 1em;
	color: #000;
}
.project-circle p {
	backdrop-filter: blur(4px);
	padding: 5px;
	background-color: rgba(201, 168, 245, 0.5);
	font-family: "Poppins";
	border-radius: 5px;
}
.project-circle h2 {
	font-family: "Reem Kufi Ink";
}
</style>
