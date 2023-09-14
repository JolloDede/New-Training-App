<script lang="ts">
	import { exercises } from '../../../store';
	import Exercise from '../../../components/ExerciseEdit.svelte';
	import Main from '../../../components/default/Main.svelte';
	import PlusIcon from '../../../components/Icon/PlusIcon.svelte';
</script>

<Main>
	{#each $exercises as $exercise}
		<Exercise
			bind:id={$exercise.id}
			bind:exerciseName={$exercise.name}
			bind:amount={$exercise.repetition}
		/>
	{/each}
</Main>

<a
	href="/today/option/exercise"
	class="w-20 fixed px-4 py-4 right-10 bottom-16 bg-sapphire-500 hover:bg-sapphire-600 rounded-full"
>
	<PlusIcon />
</a>

<!-- <a href="/today/option/exercise" class="fixed px-4 py-2 right-10 bottom-16 bg-red-600 rounded-full">
    <span class="text-4xl leading-none">+</span>
</a> -->
