<script lang="ts">
	import type { ComponentType } from 'svelte';
	import ExerciseGroup from '../routes/today/ExerciseGroup.svelte';
	import { exercises } from '../store';
	import { ExerciseType } from '../types';
	
	$: elementExercises = $exercises.filter((exer) => exer.type == ExerciseType.Element);
	$: strengthExercises = $exercises.filter((exer) => exer.type == ExerciseType.Strength);
	$: stretchExercises = $exercises.filter((exer) => exer.type == ExerciseType.Streching);
	export let exerciseComponent: ComponentType;
</script>

<div>
	<ExerciseGroup bind:list={elementExercises} title="Element" component={exerciseComponent} />
</div>
<div>
	<ExerciseGroup bind:list={strengthExercises} title="Strength" component={exerciseComponent} />
</div>
<div>
	<ExerciseGroup bind:list={stretchExercises} title="Stretch" component={exerciseComponent} />
</div>
