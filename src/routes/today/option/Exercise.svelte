<script lang="ts">
    export let exerciseName: string;
    export let amount: number;
</script>

<div class="flex m-2 p-0 border rounded-lg bg-white h-10">
    <input type="text" bind:value={exerciseName}>
    <input type="number" bind:value={amount}>
</div>