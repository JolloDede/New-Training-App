<script lang="ts">
	// export let dayOfTheWeek: number = -1;
	export let color: string = '';
	let colorClass = '';
	if (color == 'green') {
		colorClass += ' bg-green-600';
	}else if (color == 'blue') {
		colorClass += ' bg-blue-600';
	}
</script>

<div class="flex text-center items-center w-10 h-10">
	<div class={'flex rounded-full w-full h-full items-center justify-center'+colorClass}>
		<p>
			<slot />
		</p>
	</div>
</div>
