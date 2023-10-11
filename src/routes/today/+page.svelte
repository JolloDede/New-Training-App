<script>
	import { exercises } from '../../store';
	import ExerciseCard from '../../components/ExerciseCard.svelte';
	import ExerciseC from '../../components/ExerciseC.svelte';
	import SetButton from '../../components/SetButton.svelte';
</script>

{#each $exercises as exercise}
	<!-- <ExerciseCard name={exercise.name} repAmount={exercise.repetition} /> -->
	<ExerciseC>
		<!-- <p slot="name">{exercise.name}</p> -->
		<svelte:fragment slot="name">
			{exercise.name}
		</svelte:fragment>
		<svelte:fragment slot="repetitions">
			{exercise.repetition}
		</svelte:fragment>

		<svelte:fragment slot="end">
			<SetButton />
			<SetButton />
			<SetButton />
		</svelte:fragment>
	</ExerciseC>
{/each}
