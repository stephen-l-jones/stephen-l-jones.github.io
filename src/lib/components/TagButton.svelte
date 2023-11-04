<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let tag: string;
	export let filterOn: boolean;

	const dispatch = createEventDispatcher();

	function onClick() {
		dispatch('click', {
			tag
		});
	}
</script>

{#if filterOn}
	<button class="active" on:click={onClick}>{tag}</button>
{:else}
	<button on:click={onClick}>{tag}</button>
{/if}

<style>
	.active {
		background-color: #dddddd;
	}
	.active:hover {
		background-color: #cccccc;
	}
</style>
