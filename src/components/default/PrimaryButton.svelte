<script lang="ts">
	import Button from "./Button.svelte";
</script>

<Button on:click class="bg-sapphire-500 hover:bg-sapphire-600 active:bg-sapphire-700" on:click>
	<slot />
</Button>
