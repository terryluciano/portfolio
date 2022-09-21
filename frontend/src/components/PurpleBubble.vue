<template>
	<div
		class="bubble"
		ref="bubbleID"
		:style="{
			left: startX,
			top: bubbleTop,
			width: bubbleWidth,
			height: bubbleHeight,
			transition: bubbleTransition
		}"
	></div>
</template>

<script>
import { onMounted, ref } from "vue"

export default {
	setup() {
		// Methods
		const randomTransitionValue = () => {
			return "all " + (Math.random() * (15 - 5) + 5) + "s linear"
		}

		// init bubble
		const bubbleID = ref(null)
		const startX = ref(Math.random() * 100 + "%")
		let bubbleTop = ref("100%")
		let bubbleWidth = Math.random() * (5 - 1) + 1 + "vw"
		let bubbleHeight = bubbleWidth
		const bubbleTransition = ref(randomTransitionValue())

		function newPosition() {
			if (bubbleID.value.getBoundingClientRect().y <= -50) {
				startX.value = Math.floor(Math.random() * 100) + "%"
				bubbleTop.value = "100%"
				bubbleWidth = Math.random() * (5 - 1) + 1 + "vw"
				bubbleHeight = bubbleWidth
				bubbleTransition.value = randomTransitionValue()
			} else if (
				bubbleID.value.getBoundingClientRect().y - window.innerHeight >=
				0
			) {
				startX.value = Math.floor(Math.random() * 100) + "%"
				bubbleTop.value = "-20%"
			}
			requestAnimationFrame(newPosition)
		}

		onMounted(() => {
			newPosition()
		})

		return {
			bubbleID,
			startX,
			bubbleTop,
			bubbleWidth,
			bubbleHeight,
			bubbleTransition
		}
	}
}
</script>

<style>
.bubble {
	background-color: rgba(177, 24, 200, 0.25);
	position: absolute;
	border-radius: 50%;
}
</style>
