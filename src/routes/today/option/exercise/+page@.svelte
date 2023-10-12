<script lang="ts">
	import PageTemplate from '../../../../components/PageTemplate.svelte';
	import PrimaryButton from '../../../../components/default/PrimaryButton.svelte';
	import SecondaryButton from '../../../../components/default/SecondaryButton.svelte';
	import { exercises } from '../../../../store';
	import newUniqueId from 'locally-unique-id-generator';
	import { ExerciseType } from '../../../../types';
	import SelectExerciseType from '../../../../components/SelectExerciseType.svelte';

	let name: string = '';
	let repetition: number = 10;
	let exerciseType = ExerciseType.Strength;

	function handleSubmit() {
		$exercises = [...$exercises, { id: newUniqueId(), name: name, repetition: repetition, type: exerciseType }];
		window.history.back();
	}

	function backCLickHandler() {
		window.history.back();
	}
</script>

<PageTemplate>
	<svelte:fragment slot="main">
		<div class="m-auto w-4/5">
			<SecondaryButton on:click={backCLickHandler}>Back</SecondaryButton>
			<form on:submit={handleSubmit}>
				<SelectExerciseType bind:SelectedType={exerciseType} />

				<div class="grid gap-6 mb-6 md:grid-cols-2">
					<div>
						<label for="iName" class="">Exercise name</label>
						<!-- svelte-ignore a11y-autofocus -->
						<input
							class=""
							id="iName"
							bind:value={name}
							placeholder="Enter exercise name"
							autofocus
							required
						/>
					</div>
					<div>
						<label for="iRep">Repetition</label>
						<input id="iRep" type="number" bind:value={repetition} />
					</div>
					<div class="w-full">
						<PrimaryButton>Save</PrimaryButton>
					</div>
				</div>
			</form>
		</div>
	</svelte:fragment>
</PageTemplate>

<style>
	label {
		@apply block mb-2 font-medium text-sapphire-700;
	}

	input {
		@apply block w-full p-2.5 border-2 bg-sapphire-50 border-sapphire-300 text-sapphire-900 text-sm rounded-lg outline-none;
	}

	input:focus {
		@apply border-blue-500;
	}
</style>
