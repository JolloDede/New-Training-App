<script>
	import Button from "./Button.svelte";

</script>

<Button on:click class="bg-gradient-to-r from-sapphire-400 to-sapphire-500 hover:from-sapphire-500 hover:to-sapphire-700 active:from-sapphire-600 active:to-sapphire-800 ">
    <slot />
</Button>