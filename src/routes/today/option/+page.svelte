<script lang="ts">
	import { exercises } from '../../../store';
	import ExerciseEdit from '../../../components/ExerciseEdit.svelte';
	import PlusIcon from '../../../components/Icon/PlusIcon.svelte';
</script>

{#each $exercises as $exercise}
	<ExerciseEdit
		bind:id={$exercise.id}
		bind:exerciseName={$exercise.name}
		bind:amount={$exercise.repetition}
		bind:exerciseType={$exercise.type}
	/>
{/each}

<a
	href="/today/option/exercise"
	class="w-20 fixed px-4 py-4 right-10 bottom-16 bg-sapphire-500 hover:bg-sapphire-600 rounded-full"
>
	<PlusIcon />
</a>
