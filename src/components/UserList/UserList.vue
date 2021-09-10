<template>
	<div class="container"></div>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component
	export default class UserList extends Vue {}
</script>

<style scoped>
	.container {
		grid-area: UserList;
		background: var(--secondary);
		box-shadow: rgba(0, 0, 0, 0.9) 0 0 1px 0;
	}
</style>
