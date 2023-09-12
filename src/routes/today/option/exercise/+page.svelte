<script lang="ts">
	import Button from '../../../../components/default/Button.svelte';
	import Main from '../../../../components/default/Main.svelte';
	import { exercises } from '../../../../store';
	import newUniqueId from 'locally-unique-id-generator';

	let name: string = '';
	let repetition: number = 10;

	function handleSaveClick() {
		exercises.update((old: Exercise[]) => {
			let newExer: Exercise = { id: newUniqueId(), name: name, repetition: repetition };
			return [...old, newExer];
		});
		window.history.back();
	}

	function handleCancleClick() {
		window.history.back();
	}
</script>

<Main>
	<form class="flex flex-col">
		<label for="iName">Exercise name</label>
		<!-- svelte-ignore a11y-autofocus -->
		<input id="iName" bind:value={name} placeholder="Enter exercise name" autofocus />
		<label for="iRep">Repetition</label>
		<input id="iRep" bind:value={repetition} />
		<div class="m-2">
			<Button on:click={handleSaveClick}>Save</Button>
		</div>
		<div class="m-2">
			<Button on:click={handleCancleClick} primary={false}>Cancle</Button>
		</div>
	</form>
</Main>
