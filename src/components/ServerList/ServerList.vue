<template>
	<div class="container">
		<server-button :isHome="true" />
		<div class="separator"></div>
		<server-button :mentions="3" />
		<server-button />
		<server-button :hasNotification="true" />
		<server-button />
		<server-button />
		<server-button :mentions="32" />
		<server-button :mentions="4" :hasNotification="true" />
		<div v-for ="(butao, index ) in 10"  :key="index">
			<server-button :index="index"/>
		</div>

	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class ServerList extends Vue {

		chamaAlert(){
			alert("index" )
			console.log("sdasads")
		}
	}

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
