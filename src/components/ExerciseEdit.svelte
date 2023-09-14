<script lang="ts">
	import { exercises } from '../store';
	import BinIcon from './Icon/BinIcon.svelte';
	import EditIcon from './Icon/EditIcon.svelte';
	import Button from './default/Button.svelte';
	import PrimaryButton from './default/PrimaryButton.svelte';
	import SecondaryButton from './default/SecondaryButton.svelte';

	export let id: string;
	export let exerciseName: string;
	export let amount: number;
	let editing = false;

	function deleteExercise() {
		exercises.update((value) => {
			return value.filter((exercise) => exercise.id != id);
		});
	}
</script>

<div class="flex m-2 p-0 border rounded-lg bg-white h-12">
	{#if editing}
		<form class="w-full" on:submit={() => (editing = false)}>
			<div class="flex justify-around">
				<input type="text" bind:value={exerciseName} />
				<input type="number" bind:value={amount} />
				<div class="w-1/5">
					<PrimaryButton>Save</PrimaryButton>
					<SecondaryButton>Cancle</SecondaryButton>
				</div>
			</div>
		</form>
	{:else}
		<div class="flex w-full m-2 items-center">
			<p class="grow">{exerciseName}</p>
			<p class="grow">{amount}</p>
			<div class="flex w-20">
				<button class="flex-grow" on:click={() => (editing = true)}>
					<EditIcon />
				</button>
				<button class="flex-grow" on:click={deleteExercise}>
					<BinIcon />
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	* {
		@apply text-sapphire-800;
	}
</style>
