<script lang="ts">
	import type { Exercise } from '../../../types';
	import SelectExerciseType from '../../../components/SelectExerciseType.svelte';
	import PrimaryButton from '../../../components/default/PrimaryButton.svelte';
	import SecondaryButton from '../../../components/default/SecondaryButton.svelte';
	import ExerciseComp from './ExerciseComp.svelte';
	import { exercises } from '../../../store';
	
	export let exercise: Exercise;
	let newExerciseType = exercise.type;
	let editing = false;

	function handleExerciseChange() {
		editing = false;
		exercises.update((exers) => exers.map(exer => {
			if (exer.id == exercise.id) 
				return { id: exercise.id, name: exercise.name, repetition: exercise.repetition, type: newExerciseType};
			else
				return exer;
		}))
	}
</script>

{#if editing}
	<div class="flex m-2 p-2 border rounded-lg bg-white">
		<form class="w-full" on:submit={handleExerciseChange} on:cancel={() => console.log("hallo")} on:abort={() => console.log("hallo")}>
			<div class="grid grid-cols-3">
				<input class="w-24" type="text" bind:value={exercise.name} />
				<input class="w-20" type="number" bind:value={exercise.repetition} />
				<SelectExerciseType bind:SelectedType={newExerciseType} />
				<div class="w-1/3">
					<PrimaryButton>Save</PrimaryButton>
					<SecondaryButton>Cancle</SecondaryButton>
				</div>
			</div>
		</form>
	</div>
{:else}
	<ExerciseComp id={exercise.id} exerciseName={exercise.name} amount={exercise.repetition} exerciseType={exercise.type} bind:editing={editing} />
{/if}

<style>
	* {
		@apply text-sapphire-800;
	}
</style>
