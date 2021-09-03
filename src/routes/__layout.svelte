<script>
	import Nav from '../components/Nav.svelte';
</script>

<div class="p-6 max-w-screen-lg mx-auto">
	<Nav />
	<slot>Loading...</slot>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
