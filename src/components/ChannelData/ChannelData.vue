<template>
	<div class="container"></div>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component
	export default class ChannelData extends Vue {}
</script>

<style scoped>
	.container {
		grid-area: ChannelData;
		display: flex;
		flex-direction: column;
		background: var(--primary);
		box-shadow: rgba(0, 0, 0, 0.9) 1px 0px 0 0;
	}
</style>
