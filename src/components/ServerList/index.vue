<template>
	<div class="container">
		<ServerButton isHome />
		<div class="separator"></div>
		<ServerButton :mentions="3" />
		<ServerButton />
		<ServerButton hasNotification />
		<ServerButton />
		<ServerButton />
		<ServerButton :mentions="32" />
		<ServerButton :mentions="4" hasNotification />
		<ServerButton />
	</div>
</template>
<script lang="ts">
	import ServerButton from './ServerButton.vue';
	import Vue from 'vue/types/umd';

	export default {
		components: {
			ServerButton,
		},
	};
</script>

<style scoped>
	.container {
		grid-area: ServerList;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 11px 0;
		max-height: 100vh;
		overflow-y: auto;
		background: var(--tertiary);
	}

	.separator {
		width: 32px;
		border-bottom: solid 2px pink;
		margin: 8px 0;
	}
</style>
