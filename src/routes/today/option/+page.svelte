<script lang="ts">
	import { exercises } from '../../../store';
	import ExerciseEdit from '../../../components/ExerciseEdit.svelte';
	import Main from '../../../components/default/Main.svelte';
	import PlusIcon from '../../../components/Icon/PlusIcon.svelte';
	import ExerciseC from '../../../components/ExerciseC.svelte';
	import EditIcon from '../../../components/Icon/EditIcon.svelte';
	import BinIcon from '../../../components/Icon/BinIcon.svelte';
</script>

<Main>
	{#each $exercises as $exercise}
		<ExerciseEdit
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
