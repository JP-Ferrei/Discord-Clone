<template>
	<div
		class="serverbutton"
		:class="{
			'serverbutton-hasNotification': hasNotification,
			'serverbutton-isHome': isHome,
		}"
	>
		<img
			src="https://img.icons8.com/ios/50/000000/discord-logo--v1.png"
			v-if="isHome"
		/>
		<div class="mentions" v-if="mentions">{{ mentions }}</div>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			selected: Boolean,
			isHome: Boolean,
			hasNotification: Boolean,
			mentions: Number,
		},
	};
</script>

<style scoped>
	.serverbutton {
		grid-area: ServerList;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		background-color: var(--primary);
		cursor: pointer;
		position: relative;
		border-radius: 50%;
		margin-bottom: 7px;
		transition: all ease-out 0.2s;
	}

	.serverbutton img {
		width: 32px;
		height: 32px;
		color: #fff;
	}
	.serverbutton .mentions {
		background-color: var(--notification);
		width: auto;
		height: 24px;
		padding: 0 4px;
		position: absolute;
		bottom: -4px;
		right: -4px;
		border-radius: 12px;
		border: solid 4px var(--quaternary);
		text-align: right;
		font-size: 13px;
		font-weight: bold;
		color: var(--white);
	}
	.serverbutton:hover,
	.serverbutton:active {
		border-radius: 16px;
		background-color: var(--discord);
	}

	.serverbutton-isHome {
		background-color: var(--rocketseat);
	}

	.serverbutton-isHome:active:hover {
		border-radius: 16px;
	}

	.serverbutton-hasNotification::before {
		width: 9px;
		height: 9px;
		background-color: var(--white);
		position: absolute;
		left: -17px;
		top: calc(50% - 4.5px);
		border-radius: 50%;
		content: '';
		display: block;
	}
</style>
