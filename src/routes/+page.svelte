<script lang="ts">
	// let
</script>

<div class="flex flex-col h-screen">
	<header class="bg-blue-600 h-20">
		<h1 class="text-4xl font-extrabold">Training App</h1>
	</header>

	<main class="bg-red-600 h-5/6 overflow-x-auto">
		{#each { length: 20 } as _, i}
			<div class="flex m-2 border rounded-lg bg-white h-10">
                <p>Name of the exercise</p>
                <p>Exercise repetition</p>
                
                <div class="flex">
                    <img src="cricle.svg" alt="House" class="w-10" />
                    <img src="cricle.svg" alt="House" class="w-10" />
                    <img src="cricle.svg" alt="House" class="w-10" />
                </div>
                </div>
		{/each}
	</main>

	<footer class="bg-green-600 h-20">
		<img src="house.svg" alt="House" class="w-10" />
	</footer>
</div>
