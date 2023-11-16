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
		background-color: var(--active-background-color);
	}
	.active:hover {
		background-color: var(--active-hover-color);
	}
</style>
