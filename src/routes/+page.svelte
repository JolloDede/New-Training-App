<script lang="ts">
	import CalendarDay from '../components/CalendarDay.svelte';
	import Button from '../components/default/Button.svelte';
	import FancyButton from '../components/default/FancyButton.svelte';
	import Main from '../components/default/Main.svelte';
	import PrimaryButton from '../components/default/PrimaryButton.svelte';
	import SecondaryButton from '../components/default/SecondaryButton.svelte';

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

<Main>
	<div class="m-4 p-4 bg-sapphire-50 border-sapphire-400 rounded-lg">
		<a href="today" class="text-sapphire-600"> today you are gona change the world! </a>
	</div>
</Main>
