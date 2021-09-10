<template>
	<div class="container"></div>
</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator';

	@Component
	export default class ChannelList extends Vue {}
</script>

<style scoped>
	.container {
		grid-area: ChannelList;
		background-color: var(--secondary);
	}
</style>
