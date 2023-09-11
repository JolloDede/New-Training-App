<script>
	import { exercises } from "../../store";
	import Exercise from "../../components/ExerciseCard.svelte";

</script>

<main class="flex flex-col bg-red-600 h-5/6 overflow-x-auto">
	{#each $exercises as exercise}
		<Exercise name={exercise.name} repAmount={exercise.repetition} />
	{/each}
</main>
