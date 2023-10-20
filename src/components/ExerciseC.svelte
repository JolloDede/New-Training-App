<script lang="ts">
</script>

<div class="flex items-center justify-between my-2 p-2 border rounded-lg bg-white">
	<div>
		<p class="break-all max-w-xs"><slot name="name" /></p>
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
