<template>
	<div id="grid">
		<ServerList />
		<ServerName />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import ServerList from '@/components/ServerList/index.vue';
	import ServerName from '@/components/ServerName/index.vue';

	export default Vue.extend({
		components: {
			ServerList,
			ServerName,
		},
	});
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
</style>
