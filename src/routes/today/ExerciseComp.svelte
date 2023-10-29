<script lang="ts">
	import ExerciseBase from "../../components/ExerciseBase.svelte";
	import SetButton from "../../components/SetButton.svelte";
	import type { Exercise } from "../../types";

    export let exercise: Exercise;
</script>

<ExerciseBase>
    <svelte:fragment slot="name">
        {exercise.name}
    </svelte:fragment>
    <svelte:fragment slot="repetitions">
        {exercise.repetition}
    </svelte:fragment>

    <svelte:fragment slot="end">
        <SetButton />
        <SetButton />
        <SetButton />
    </svelte:fragment>
</ExerciseBase>