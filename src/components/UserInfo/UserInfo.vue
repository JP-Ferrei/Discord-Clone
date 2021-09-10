<template>
	<div class="container">
		<div class="perfil">
			<img
				src="https://th.bing.com/th/id/OIP.zJCQrwkCrUy8acggLqgsIgHaHa?pid=ImgDet&rs=1"
				alt=""
				class="perfil-imagem"
			/>

			<div class="perfil-info">
				<h1 class="perfil-nome">Nome</h1>
				<p class="perfil-subnick">#1234</p>
			</div>
		</div>

		<div class="configuracoes">
			<v-icon class="icon" color="#8a8c90" size="20px">mdi-microphone</v-icon>
			<!-- <v-icon>mdi-microphone-off</v-icon> -->
			<v-icon class="icon" color="#8a8c90" size="20px">mdi-headphones</v-icon>
			<!-- <v-icon>mdi-headphones-off</v-icon> -->
			<v-icon class="icon" color="#8a8c90" size="20px">mdi-cog</v-icon>
		</div>
	</div>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component
	export default class UserInfo extends Vue {
		@Prop() clicked!: boolean;
	}
</script>

<style scoped>
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		grid-area: UserInfo;
		background-color: var(--quaternary);
		box-shadow: rgba(0, 0, 0, 0.9) 0 0 3px 0;
	}

	.perfil {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 95px;
	}
	.perfil-imagem {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-left: 8px;
		cursor: pointer;
	}

	.perfil-info {
		cursor: pointer;
	}
	.perfil-nome {
		font-size: 14px;
		color: var(--white);
	}

	.perfil-subnick {
		font-size: 12px;
		color: var(--symbol);
	}

	.configuracoes {
		margin-right: 10px;
		display: flex;
		justify-content: space-between;
	}

	.icon {
		cursor: pointer;
		width: 32px;
		height: 32px;
	}

	.icon:hover {
		background: var(--quinary);
		border-radius: 8px;
	}
</style>
