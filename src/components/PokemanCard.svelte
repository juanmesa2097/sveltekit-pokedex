<script>
	import { fade } from 'svelte/transition';

	export let pokeman;
</script>

<a
	href={`/pokemon/${pokeman.id}`}
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-2xl flex flex-col items-center transition-shadow ease-in-out duration-100"
	transition:fade
>
	<img src={pokeman.image} alt={pokeman.name} class="h-40 w-40" />
	<h3 class="font-semibold text-lg uppercase">{pokeman.id}. {pokeman.name}</h3>
</a>
