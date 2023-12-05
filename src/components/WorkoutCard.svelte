<script lang="ts">
	import Card from "./Elements/Card.svelte";

    export let name: string;
    export let summary: string;
</script>

<Card>
    <h1 slot="title">{name}</h1>
    <p slot="content">{summary}</p>
</Card>