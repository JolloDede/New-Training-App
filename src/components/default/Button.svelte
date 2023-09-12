<script lang="ts">
	export let primary = true;
</script>

<button on:click class={primary ? 'primary' : 'secondary'}>
	<slot />
</button>

<style>
	button {
		@apply w-fit px-4 py-2 rounded-lg;
	}

	.primary {
		@apply bg-sapphire-500;
	}

	:hover.primary {
		@apply bg-sapphire-600;
	}

	:active.primary {
		@apply bg-sapphire-700;
	}

	.secondary {
		@apply bg-white text-sapphire-700 border-sapphire-700;
	}

	:hover.secondary {
		@apply bg-sapphire-50;
	}

	:active.secondary {
		@apply bg-sapphire-100;
	}
</style>
