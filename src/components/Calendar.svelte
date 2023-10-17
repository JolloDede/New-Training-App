<script lang="ts">
	import CalendarDay from './CalendarDay.svelte';

	let dateToday = new Date();
	let firstDayMonth = new Date(dateToday.getFullYear(), dateToday.getMonth(), 1);
	let lastDayMonth = new Date(dateToday.getFullYear(), dateToday.getMonth() + 1, 0);
	let firstDay = new Date(
		firstDayMonth.getFullYear(),
		firstDayMonth.getMonth(),
		firstDayMonth.getDate() - (firstDayMonth.getDay() || 7) + 1
	);
	let lastDay = new Date(
		lastDayMonth.getFullYear(),
		lastDayMonth.getMonth(),
		lastDayMonth.getDate() + (8 - lastDayMonth.getDay())
	);
	let dayIt = new Date(firstDay);
	let dayArr: { dayOfMonth: number; color: string }[] = [];
	do {
		if (dayIt < firstDayMonth || dayIt > lastDayMonth) {
			dayArr.push({ dayOfMonth: dayIt.getDate(), color: '' });
		} else if (dayIt.getDay() == 6 || dayIt.getDay() == 0) {
			dayArr.push({ dayOfMonth: dayIt.getDate(), color: 'blue' });
		} else {
			dayArr.push({ dayOfMonth: dayIt.getDate(), color: 'green' });
		}
		dayIt.setDate(dayIt.getDate() + 1);
	} while (dayIt < lastDay);
</script>

<div
	class="flex flex-col w-96 m-4 p-4 bg-sapphire-50 text-zinc-800 rounded-lg"
>
	<div class="font-semibold text-2xl">Calendar</div>
	<div class="flex justify-between w-60 px-2 border rounded-md">
		<p class="font-semibold">
			{dateToday.toLocaleString('default', { month: 'long' }) +
				' ' +
				dateToday.toLocaleString('default', { year: 'numeric' })}
		</p>
		<div>
			<button>Up</button>
			<button>Down</button>
		</div>
	</div>
	<div class="grid grid-cols-7 h-80">
		<CalendarDay>Mo</CalendarDay>
		<CalendarDay>Di</CalendarDay>
		<CalendarDay>Mi</CalendarDay>
		<CalendarDay>Do</CalendarDay>
		<CalendarDay>Fr</CalendarDay>
		<CalendarDay>Sa</CalendarDay>
		<CalendarDay>So</CalendarDay>
		{#each dayArr as day}
			<CalendarDay color={day.color}>
				{day.dayOfMonth}
			</CalendarDay>
		{/each}
	</div>
</div>
