<template>
	<div class="container"></div>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component
	export default class ChannelInfo extends Vue {}
</script>

<style scoped>
	.container {
		grid-area: ChannelInfo;
		background: var(--primary);
		box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 2px 0px;
		z-index: 10;
	}
</style>
