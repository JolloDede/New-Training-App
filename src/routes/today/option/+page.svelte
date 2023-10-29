<script lang="ts">
	import { exercises } from '../../../store';
	import ExerciseEdit from './ExerciseEdit.svelte';
	import PlusIcon from '../../../components/Icon/PlusIcon.svelte';
	import ExerciseNewList from '../../../components/ExerciseNewList.svelte';
</script>

<ExerciseNewList exerciseComponent={ExerciseEdit} />

<a
	href="/today/option/exercise"
	class="w-20 fixed px-4 py-4 right-10 bottom-16 bg-sapphire-500 hover:bg-sapphire-600 rounded-full"
>
	<PlusIcon />
</a>
