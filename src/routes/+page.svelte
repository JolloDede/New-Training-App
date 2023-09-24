<script lang="ts">
	import CalendarDay from '../components/CalendarDay.svelte';
import Button from '../components/default/Button.svelte';
	import FancyButton from '../components/default/FancyButton.svelte';
	import Main from '../components/default/Main.svelte';
	import PrimaryButton from '../components/default/PrimaryButton.svelte';
	import SecondaryButton from '../components/default/SecondaryButton.svelte';
	let daysInMonth = new Date(2023, 9, 0).getDate();
</script>

<Main>
	<div class="m-4 p-4 bg-sapphire-50 border-sapphire-400 rounded-lg">
		<a href="today" class="text-sapphire-600"> today you are gona change the world! </a>
	</div>
	<div class="flex flex-col m-4 p-4 bg-sapphire-50 text-zinc-800 rounded-lg" style="height: 28rem; width: 24rem;">
		<div class="font-semibold text-2xl">Calendar</div>
		<div class="flex flex-wrap">
			<CalendarDay>Mo</CalendarDay>
			<CalendarDay>Di</CalendarDay>
			<CalendarDay>Mi</CalendarDay>
			<CalendarDay>Do</CalendarDay>
			<CalendarDay>Fr</CalendarDay>
			<CalendarDay>Sa</CalendarDay>
			<CalendarDay>So</CalendarDay>
			{#each {length: daysInMonth} as _, day}
				<div >
					{day}
				</div>
			{/each}
		</div>
	</div>
</Main>
