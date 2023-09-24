<script lang="ts">
	import Circle from './Icon/Circle.svelte';
	import SetButton from './SetButton.svelte';
	import Button from './default/Button.svelte';

	export let name: string;
	export let repAmount: number;
</script>

<div class="flex items-center justify-between m-2 p-2 border rounded-lg bg-white h-10">
	<p>{name}</p>
	<p>{repAmount}</p>

	<div class="flex">
		<SetButton />
		<SetButton />
		<SetButton />
	</div>
</div>

<style>
	p {
		@apply text-sapphire-700;
	}
</style>
