<script lang="ts">
	import Footer from '../../components/default/Footer.svelte';
	import TimeNav from '../../components/TimeNav.svelte';
</script>

<div class="flex flex-col h-screen">
	<TimeNav />

	<slot />

	<Footer />
</div>
