<script lang="ts">
	import PageTemplate from '../components/PageTemplate.svelte';
	
	let dateToday = new Date();
	let firstDay = new Date(dateToday.getFullYear(), dateToday.getMonth(), 1);
	let indexOfFirstDay = firstDay.getDay();
	if (indexOfFirstDay == 0) indexOfFirstDay = 7;
	let lastDay = new Date(dateToday.getFullYear(), dateToday.getMonth() + 1, 0);

	let dayArr: number[] = [];
	for (let i = 1; i < 43; i++) {
		if (i >= indexOfFirstDay - 1) {
			if (i - indexOfFirstDay >= lastDay.getDate()) {
				dayArr.push(0);
			} else {
				dayArr.push(i - indexOfFirstDay + 1);
			}
		} else {
			dayArr.push(0);
		}
	}
</script>

<svelte:head>
	<title>Overview</title>
</svelte:head>

<PageTemplate>
	<svelte:fragment slot="main">
		<div class="m-4 p-4 bg-sapphire-50 border-sapphire-400 rounded-lg">
			<a href="today" class="text-sapphire-600"> today you are gona change the world! </a>
		</div>		
	</svelte:fragment>
</PageTemplate>
