<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from './../components/PokemanCard.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toUpperCase().includes(searchTerm.toUpperCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input
	type="text"
	placeholder="Search Pokemon"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
/>

<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
	{#if filteredPokemon.length}
		{#each filteredPokemon as pokeman}
			<PokemanCard {pokeman} />
		{/each}
	{:else}
		<p class="text-xl text-center my-12">No pokemon found</p>
	{/if}
</div>
