<div
	class="flex flex-col h-screen text-sapphire-50 bg-gradient-to-b from-sapphire-400 to-sapphire-100"
>
	<header class="flex flex-col text-sapphire-800">
		<div class="flex h-20 ml-6 items-center">
			<a href="/" class="text-4xl font-extrabold">Training App</a>
		</div>
		<hr />
		<slot name="header" />
	</header>
	<main class="grow mx-2 overflow-y-auto">
		<div class="mb-20">
			<slot name="main" />
		</div>
	</main>
	<footer class="">
		<slot name="footer" />
	</footer>
</div>
