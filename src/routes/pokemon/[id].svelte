<script context="module">
	import { fetchPokemanById } from './../../stores/pokestore.js';

	export async function load({ page }) {
		const id = page.params.id;
		const pokeman = await fetchPokemanById(id);
		return { props: { pokeman } };
	}
</script>

<script>
	export let pokeman;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>

	<p>
		Height: <strong>{pokeman.height}</strong> | Weight: <strong>{pokeman.weight}</strong>
	</p>

	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />

	<h3 class="text-2xl text-center my-4 uppercase">Types</h3>

	<ul>
		{#each pokeman.types as { type }}
			<li>{type.name}</li>
		{/each}
	</ul>
</div>
