<script lang="ts">
	import type { Exercise } from '../../types';

	export let list: Exercise[];
	export let component: any;
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
			<svelte:component this={component} bind:exercise={exercise} />
		{/each}
	</div>
</div>
