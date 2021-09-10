<template>
	<div id="grid">
		<server-list />
		<server-name />
		<channel-list />
		<user-info />
		<channel-info />
		<channel-data />
		<user-list />
	</div>
</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator';

	@Component
	export default class Home extends Vue {}
</script>

<style scoped>
	#grid {
		display: grid;
		height: 100vh;
		grid-template-columns: 71px 240px auto 240px;
		grid-template-rows: 46px auto 52px;
		grid-template-areas:
			'ServerList ServerName  ChannelInfo ChannelInfo'
			'ServerList ChannelList ChannelData UserList'
			'ServerList UserInfo    ChannelData UserList';
	}

	.col2 {
	}
</style>
