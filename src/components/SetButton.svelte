<script lang="ts">
	import { SetState } from '../types';
	import Circle from './Icon/Circle.svelte';

	let state = SetState.Default;

	function handleClick() {
		switch (state) {
			case SetState.Default:
				state = SetState.Done;
				break;
			case SetState.Done:
				state = SetState.Failed;
				break;
			case SetState.Failed:
				state = SetState.Default;
				break;

			default:
				console.log('Error the state is not defined!');
				break;
		}
	}
</script>

<button on:click={handleClick} class="px-4">
	{#if state == SetState.Default}
		<Circle class="stroke-black" />
	{/if}
	{#if state == SetState.Done}
		<Circle class="fill-green-600 stroke-green-600" />
	{/if}
	{#if state == SetState.Failed}
		<Circle class="fill-red-600 stroke-red-600" />
	{/if}
</button>
