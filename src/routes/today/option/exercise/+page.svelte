<script lang="ts">
	import { exercises } from '../../../../store';

	let name: string = '';
	let repetition: number = 10;

	function handleSaveClick() {
        exercises.update((old: Exercise[]) => {
            let newExer: Exercise = { name: name, repetition: repetition }; 
			return [...old, newExer];
		});
        window.history.back();
	}

	function handleCancleClick() {
		window.history.back();
	}
</script>

<form class="flex flex-col h-5/6">
	<label for="iName">Exercise name</label>
	<input id="iName" bind:value={name} placeholder="Enter exercise name" />
	<label for="iRep">Repetition</label>
	<input id="iRep" bind:value={repetition} />
	<button on:click={handleSaveClick} class="border">Save</button>
	<button on:click={handleCancleClick} class="border">Cancle</button>
</form>
