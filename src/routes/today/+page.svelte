<script>
	import ExerciseNewList from '../../components/ExerciseNewList.svelte';
import { elementExercises, strengthExercises, stretchExercises } from '../../store';
	import ExerciseComp from './ExerciseComp.svelte';
	import ExerciseGroup from './ExerciseGroup.svelte';
</script>

<ExerciseNewList exerciseComponent={ExerciseComp} />