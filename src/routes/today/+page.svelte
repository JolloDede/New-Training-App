<script>
	import { exercises } from '../../store';
	import ExerciseCard from '../../components/ExerciseCard.svelte';
	import ExerciseC from '../../components/ExerciseC.svelte';
	import SetButton from '../../components/SetButton.svelte';
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