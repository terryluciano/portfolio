<template>
	<div class="skills page">
		<div class="background-c">
			<div class="skill-container">
				<SkillCard
					v-for="skill in skills"
					v-bind:key="skill"
					:cardTitle="skill.title"
					:cardDetails="skill.detail"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import SkillCard from "@/components/SkillCard.vue"

export default {
	data() {
		return {
			skills: [
				{
					title: "Backend Experience",
					detail:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi non dictum urna morbi pharetra. Sagittis, purus tortor, accumsan convallis euismod id sapien nibh augue. Nunc risus sapien in ligula mus etiam. Sociis quis duis amet nam nunc pretium feugiat et convallis."
				},
				{
					title: "Frontend Experience",
					detail:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi non dictum urna morbi pharetra. Sagittis, purus tortor, accumsan convallis euismod id sapien nibh augue. Nunc risus sapien in ligula mus etiam. Sociis quis duis amet nam nunc pretium feugiat et convallis."
				},
				{
					title: "Database Experience",
					detail:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi non dictum urna morbi pharetra. Sagittis, purus tortor, accumsan convallis euismod id sapien nibh augue. Nunc risus sapien in ligula mus etiam. Sociis quis duis amet nam nunc pretium feugiat et convallis."
				},
				{
					title: "Other Experience",
					detail:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi non dictum urna morbi pharetra. Sagittis, purus tortor, accumsan convallis euismod id sapien nibh augue. Nunc risus sapien in ligula mus etiam. Sociis quis duis amet nam nunc pretium feugiat et convallis."
				}
			]
		}
	},
	name: "SkillView",
	components: {
		SkillCard
	}
}
</script>

<style>
.skills {
	background-color: #230c33;
	background-image: url("@/assets/backpatternv4test.png");
	background-repeat: repeat;
	position: relative;
	animation: bgAnimated 40s linear infinite;
}

@keyframes bgAnimated {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position: 100%;
	}
}

.skill-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	min-width: 900px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	gap: 20px;
}
</style>
