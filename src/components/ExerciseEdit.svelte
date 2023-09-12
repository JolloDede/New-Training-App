<script lang="ts">
	import { exercises } from '../store';
	import BinIcon from './BinIcon.svelte';
	import EditIcon from './EditIcon.svelte';

    export let id: string;
	export let exerciseName: string;
	export let amount: number;
	let editing = false;

    function deleteExercise() {
        exercises.update((value) => {
            return value.filter(exercise => exercise.id != id);
        })
    }
</script>

<div class="flex m-2 p-0 border rounded-lg bg-white h-10">
	{#if editing}
		<form on:submit={() => editing = false}>
			<input type="text" bind:value={exerciseName} />
			<input type="number" bind:value={amount} />
            <button>Save</button>
		</form>
	{:else}
		<p class="grow">{exerciseName}</p>
		<p class="grow">{amount}</p>
		<div class="flex w-20">
			<button class="flex-grow" on:click={() => (editing = true)}>
				<EditIcon />
			</button>
			<button class="flex-grow" on:click={deleteExercise}>
				<BinIcon />
			</button>
		</div>
	{/if}
</div>
