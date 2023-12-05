<script>
	import WorkoutCard from '../../components/WorkoutCard.svelte';
import { exercises, workouts } from '../../store';
	import { ExerciseType } from '../../types';
	import ExerciseList from './ExerciseList.svelte';

	let StretchArr = $exercises.filter((exer) => exer.type == ExerciseType.Streching);
	let ElementArr = $exercises.filter((exer) => exer.type == ExerciseType.Element);
	let StrengthArr = $exercises.filter((exer) => exer.type == ExerciseType.Strength);
</script>

<div>
	<ExerciseList list={ElementArr} title="Element" />
</div>
<div>
	<ExerciseList list={StrengthArr} title="Strength" />
</div>
<div>
	<ExerciseList list={StretchArr} title="Stretch" />
</div>


<div>
	{#each $workouts as workout}
		<WorkoutCard name={workout.name} summary={workout.summary} />
	{/each}
</div>