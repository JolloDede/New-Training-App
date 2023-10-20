<script lang="ts">
	import SetButton from '../../components/SetButton.svelte';
	import type { Exercise } from '../../types';
	import ExerciseC from '../../components/ExerciseC.svelte';

	export let list: Exercise[];
	export let title: string;
	let hidden: boolean = true;
    if (list.length == 0) 
        hidden = false;
</script>

<div>
	<button
		on:click={() => (hidden = !hidden)}
		class="flex w-full border text-lg font-semibold items-center justify-between rounded-lg px-5 py-2.5 mb-1"
	>
		{title}
		<div class={'transform ' + (hidden ? '' : 'rotate-90')}>
			<svg
				class="w-2.5 h-2.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 6"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 4 4 4-4"
				/>
			</svg>
		</div>
	</button>
	<div class={hidden ? '' : 'hidden'}>
		{#each list as exercise}
			<ExerciseC>
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
			</ExerciseC>
		{/each}
	</div>
</div>
