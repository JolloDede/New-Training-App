<script>
	import Button from './Button.svelte';
</script>

<Button on:click class="border bg-white text-sapphire-700 border-sapphire-700 hover:bg-sapphire-50 active:bg-sapphire-100">
	<slot />
</Button>