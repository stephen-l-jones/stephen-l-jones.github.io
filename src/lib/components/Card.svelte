<script lang="ts">
	import { onMount } from 'svelte';

	export let href: string;
	export let target: string;
	export let borderColor: string = 'var(--border-color)';
	export let cardId = '';

	let visited = false;

	onMount(() => {
		const isoDateString = localStorage.getItem(cardId);

		if (isoDateString !== null) {
			let dateDifference = new Date().valueOf() - new Date(isoDateString).valueOf();
			visited = dateDifference / (1000 * 60 * 60 * 24) < 14;
		} else {
			visited = false;
		}
		console.log(cardId, visited);
	});

	function setLocalStorage() {
		if (cardId === '') return false;
		localStorage.setItem(cardId, new Date().toISOString());
		return true;
	}

	function cardClicked() {
		visited = setLocalStorage();
	}
</script>

<div class="card" style="border: 1px solid {borderColor};">
	<a {href} {target} on:click={cardClicked}>
		<div class:visited>
			<slot />
		</div>
		{#if visited}
			<img class="check" src="/img/check.webp" />
		{/if}
	</a>
</div>

<style>
	.card {
		position: relative;
		border-radius: 8px;
		box-shadow: 2px 2px 20px -7px #00000022;
		display: flex;
		overflow: hidden;
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
		mask-image: linear-gradient(black, transparent);
	}

	.check {
		position: absolute;
		top: 5px;
		left: 5px;
	}
</style>
