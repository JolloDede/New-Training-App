<script lang="ts">
	let clazz = "";
	export { clazz as class };
</script>

<button on:click class={'px-4 py-2 rounded-lg' + ' ' + clazz}>
	<slot />
</button>
