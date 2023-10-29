<script lang="ts">
	import ExerciseBase from "../../../components/ExerciseBase.svelte";
	import BinIcon from "../../../components/Icon/BinIcon.svelte";
	import EditIcon from "../../../components/Icon/EditIcon.svelte";
	import { exercises } from "../../../store";
	import type { ExerciseType } from "../../../types";

    export let id: string;
	export let exerciseName: string;
	export let amount: number;
	export let exerciseType: ExerciseType;

    export let editing: boolean;

    function deleteExercise() {
		exercises.update((value) => {
			return value.filter((exercise) => exercise.id != id);
		});
	}
</script>


<ExerciseBase>
    <svelte:fragment slot="name">
        {exerciseName}
    </svelte:fragment>
    <svelte:fragment slot="repetitions">
        {amount}
    </svelte:fragment>
    <svelte:fragment slot="end">
        <div class="flex w-20">
            <button class="flex-grow" on:click={() => (editing = true)}>
                <EditIcon />
            </button>
            <button class="flex-grow" on:click={deleteExercise}>
                <BinIcon />
            </button>
        </div>
    </svelte:fragment>
</ExerciseBase>