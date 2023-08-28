<script lang="ts">
	let date = new Date();
</script>

<div class="flex flex-col h-screen">
	<header class="bg-blue-600 h-28">
		<h1 class="text-4xl font-extrabold">Training App</h1>
		<div class="bg-fuchsia-600 p-2">
			<div class="flex items-center justify-center bg-slate-600">
				<div class="ml-2 text-4xl">
					<p class="align-middle">&#8249;</p>
				</div>
				<div class="m-auto">
					<span>{date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}</span>
				</div>
				<div class="mr-2 text-4xl">
					<p>&#8250;</p>
				</div>
			</div>
		</div>
	</header>

	<slot />

	<footer class="flex justify-evenly bg-green-600 h-14">
		<a href="/today">
			<img src="/house.svg" alt="House" class="w-10" />
		</a>
		<a href="/today/option">
			<img src="/folder_un.svg" alt="Folder" class="w-10" />
		</a>
	</footer>
</div>
