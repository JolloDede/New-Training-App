<script lang="ts">
</script>

<div class="flex w-full items-center justify-between m-2 p-2 border rounded-lg bg-white">
	<div>
		<p class="break-words"><slot name="name" /></p>
	</div>
	<div>
		<p><slot name="repetitions" /></p>
	</div>

	<div class="flex">
		<slot name="end" />
	</div>
</div>

<style>
	p {
		@apply text-sapphire-700;
	}
</style>
