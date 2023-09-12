<script lang="ts">
	import { exercises } from "../../../store";
	import Exercise from "../../../components/ExerciseEdit.svelte";

</script>

<div class="flex flex-col bg-fuchsia-600 h-5/6 overflow-x-auto">
    {#each $exercises as $exercise}
		<Exercise bind:id={$exercise.id} bind:exerciseName={$exercise.name} bind:amount={$exercise.repetition} />
	{/each}
</div>

<a href="/today/option/exercise" class="fixed px-4 py-2 right-10 bottom-16 bg-red-600 rounded-full">
    <span class="text-4xl leading-none">+</span>
</a>