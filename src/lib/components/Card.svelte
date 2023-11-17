<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let href: string;
	export let target: string;
	export let cardCategory: string = '';
	export let cardId = '';

	let visited = false;
	let darkStore: Writable<boolean> = getContext('darkMode');

	onMount(() => {
		const isoDateString = localStorage.getItem(cardId);

		if (isoDateString !== null) {
			let dateDifference = new Date().valueOf() - new Date(isoDateString).valueOf();
			visited = dateDifference / (1000 * 60 * 60 * 24) < 14;
		} else {
			visited = false;
		}
	});

	function storeCardVisit() {
		if (cardId === '') return false;
		localStorage.setItem(cardId, new Date().toISOString());
		return true;
	}

	function cardClicked() {
		visited = storeCardVisit();
	}

	function clearVisited() {
		localStorage.removeItem(cardId);
		visited = false;
	}
</script>

<div class="card {$darkStore ? 'dark' : 'light'} {cardCategory}">
	<a {href} {target} on:click={cardClicked}>
		<div class:visited>
			<slot />
		</div>
	</a>
	{#if visited}
		<button class="check" on:click={clearVisited}>✔</button>
		<!-- < class="check">✔</span> -->
		<!-- <img alt="visited" class="check" src="/img/{$darkStore ? 'check-dark.webp' : 'check.webp'}" /> -->
	{/if}
</div>

<style>
	.card {
		color: var(--font-color);
		position: relative;
		border: 1px solid #d5d7db;
		border-radius: 8px;
		box-shadow: 2px 2px 20px -7px #00000022;
		display: flex;
		flex-grow: 1;
		overflow: hidden;
	}
	.card.dark {
		border: 1px solid #75787e;
	}
	.card.dark.scenario {
		border: 1px solid #d5d7db;
	}
	.card.light.scenario {
		border: 1px solid #75787e;
	}
	a {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}

	a:hover {
		background-color: var(--hover-color);
	}

	a > div {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		-webkit-mask-image: none;
		mask-image: none;
	}

	a > .visited {
		-webkit-mask-image: linear-gradient(-45deg, black, black, transparent);
		mask-image: linear-gradient(-30deg, black, black, transparent);
	}

	.check {
		position: absolute;
		color: var(--font-color-lighter);
		font-size: 1.5rem;
		left: 10px;
		border: 0;
		padding: 0;
		margin: 0;
		background-color: #00000000;
	}
</style>
