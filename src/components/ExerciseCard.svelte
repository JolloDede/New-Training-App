<script lang="ts">
    export let name: string;
    export let repAmount: number;
</script>

<div class="flex justify-between m-2 border rounded-lg bg-white h-10">
    <p>{name}</p>
    <p>{repAmount}</p>

    <div class="flex">
        <img src="/cricle.svg" alt="House" class="w-10" />
        <img src="/cricle.svg" alt="House" class="w-10" />
        <img src="/cricle.svg" alt="House" class="w-10" />
    </div>
</div>