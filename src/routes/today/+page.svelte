<script>
	import { exercises } from "../../store";
	import Exercise from "../../components/ExerciseCard.svelte";
	import Main from "../../components/default/Main.svelte";

</script>

<Main>
	{#each $exercises as exercise}
		<Exercise name={exercise.name} repAmount={exercise.repetition} />
	{/each}
</Main>
