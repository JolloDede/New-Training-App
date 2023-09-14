<script>
	import NextIcon from './Icon/NextIcon.svelte';
	import PreviousIcon from './Icon/PreviousIcon.svelte';

	let date = new Date();
</script>

<div class="p-2">
	<div class="flex items-center justify-between bg-sapphire-500">
		<div class="w-10 ml-2">
			<PreviousIcon />
		</div>
		<div class="text-lg font-bold">
			<p>{date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}</p>
		</div>
		<div class="w-10 mr-2">
			<NextIcon />
		</div>
	</div>
</div>
