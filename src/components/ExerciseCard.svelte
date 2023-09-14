<script lang="ts">
	import Circle from './Icon/Circle.svelte';
	import Button from './default/Button.svelte';

	export let name: string;
	export let repAmount: number;
</script>

<div class="flex items-center justify-between m-2 p-2 border rounded-lg bg-white h-10">
	<p>{name}</p>
	<p>{repAmount}</p>

	<div class="flex">
		<Button class="">
			<Circle />
		</Button>
		<Button class="test">
			<Circle />
		</Button>
		<Button class="test">
			<Circle />
		</Button>
	</div>
</div>

<style>
	p {
		@apply text-sapphire-700;
	}
</style>
