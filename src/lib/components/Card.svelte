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
</script>

<div class="card {$darkStore ? 'dark' : 'light'} {cardCategory}">
	<a {href} {target} on:click={cardClicked}>
		<div class:visited>
			<slot />
		</div>
		{#if visited}
			<img alt="visited" class="check" src="/img/{$darkStore ? 'check-dark.webp' : 'check.webp'}" />
		{/if}
	</a>
</div>

<style>
	.card {
		color: var(--font-color);
		position: relative;
		border: 1px solid #d5d7db;
		border-radius: 8px;
		box-shadow: 2px 2px 20px -7px #00000022;
		display: flex;
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
		-webkit-mask-image: none;
		mask-image: none;
	}

	a > .visited {
		-webkit-mask-image: linear-gradient(-30deg, black, black, transparent);
		mask-image: linear-gradient(-30deg, black, black, transparent);
	}

	.check {
		position: absolute;
		top: 5px;
		left: 5px;
	}
</style>
