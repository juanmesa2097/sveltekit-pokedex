import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async (limit = 150) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
	const res = await fetch(url);
	const data = await res.json();

	const loadedPokemon = data.results.map((res, index) => {
		const id = index + 1;

		return {
			id,
			name: res.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	});

	pokemon.set(loadedPokemon);
};

export const fetchPokemanById = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();
	return pokeman;
};

fetchPokemon();
