<script lang="ts">
	// export let dayOfTheWeek: number = -1;
	export let color: string = '';
</script>

<div class="flex text-center items-center w-10 h-10">
	{#if color == 'green'}
		<div class="flex-auto bg-green-600 rounded-full">
			<slot />
		</div>
	{:else if color == 'blue'}
		<div class="bg-blue-600 rounded-full">
			<slot />
		</div>
	{:else}
		<div class="">
			<slot />
		</div>
	{/if}
</div>
