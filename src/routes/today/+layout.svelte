<script lang="ts">
	import Footer from '../../components/default/Footer.svelte';
	import PageTemplate from '../../components/PageTemplate.svelte';
	import TimeNav from '../../components/TimeNav.svelte';
</script>

<!-- <div class="flex flex-col">
	<TimeNav />

	<slot />

	<Footer />
</div> -->

<PageTemplate>
	<svelte:fragment slot="header">
		<TimeNav />
	</svelte:fragment>
	<svelte:fragment slot="main">
		<slot />
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</PageTemplate>
