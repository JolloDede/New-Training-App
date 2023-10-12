<script lang="ts">
	import { exercises } from '../store';
	import type { ExerciseType } from '../types';
	import ExerciseC from './ExerciseC.svelte';
	import BinIcon from './Icon/BinIcon.svelte';
	import EditIcon from './Icon/EditIcon.svelte';
	import SelectExerciseType from './SelectExerciseType.svelte';
	import Button from './default/Button.svelte';
	import PrimaryButton from './default/PrimaryButton.svelte';
	import SecondaryButton from './default/SecondaryButton.svelte';

	export let id: string;
	export let exerciseName: string;
	export let amount: number;
	export let exerciseType: ExerciseType;
	let editing = false;

	function deleteExercise() {
		exercises.update((value) => {
			return value.filter((exercise) => exercise.id != id);
		});
	}
</script>

{#if editing}
	<div class="flex m-2 p-2 border rounded-lg bg-white">
		<form class="w-full" on:submit={() => (editing = false)}>
			<div class="grid grid-cols-3">
				<input class="w-24" type="text" bind:value={exerciseName} />
				<input class="w-20" type="number" bind:value={amount} />
				<SelectExerciseType bind:SelectedType={exerciseType} />
				<div class="w-1/3">
					<PrimaryButton>Save</PrimaryButton>
					<SecondaryButton>Cancle</SecondaryButton>
				</div>
			</div>
		</form>
	</div>
{:else}
	<ExerciseC>
		<svelte:fragment slot="name">
			{exerciseName}
		</svelte:fragment>
		<svelte:fragment slot="repetitions">
			{amount}
		</svelte:fragment>
		<svelte:fragment slot="end">
			<div class="flex w-20">
				<button class="flex-grow" on:click={() => (editing = true)}>
					<EditIcon />
				</button>
				<button class="flex-grow" on:click={deleteExercise}>
					<BinIcon />
				</button>
			</div>
		</svelte:fragment>
	</ExerciseC>
{/if}

<style>
	* {
		@apply text-sapphire-800;
	}
</style>
