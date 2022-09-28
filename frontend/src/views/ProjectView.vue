<template>
	<div class="page">
		<div class="background-c">
			<div class="project-circle-container">
				<ProjectCircle
					v-for="project in projects"
					v-bind:key="project"
					:projectImgLink="project.img"
					:projectTitle="project.title"
					:projectDescription="project.descript"
					:githubRepo="project.repo"
					:projectWebsite="project.website"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import ProjectCircle from "@/components/ProjectCircle.vue"

export default {
	data() {
		return {
			projects: [
				{
					img: "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
					title: "Project Title",
					descript: "Smnaple text for a projet I've worked on",
					repo: "https://github.com/TerryLDev/QuetZil",
					website: "https://google.com"
				},
				{
					img: "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
					title: "Project Title",
					descript: "Smnaple text for a projet I've worked on",
					repo: "https://github.com/TerryLDev/QuetZil",
					website: "https://google.com"
				},
				{
					img: "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
					title: "Project Name Here",
					descript: "Smnaple text for a projet I've worked on",
					repo: "https://github.com/TerryLDev/QuetZil",
					website: "https://google.com"
				}
			]
		}
	},
	name: "ProjectView",
	components: {
		ProjectCircle
	}
}
</script>

<style>
.project-circle-container {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
}
</style>
