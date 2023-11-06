<script lang="ts">
	import { base } from '$app/paths';
	import Card from './Card.svelte';

	export let navPage: NavPage;
	export let pageType: string;
	export let includeSubtitle = false;
	export let borderColor = '#d5d7db';

	let href: string = navPage.folder.concat(navPage.folder === '' ? '' : '/', navPage.slug);
</script>

<Card {href} target="_self" {borderColor}>
	<img
		class="page-card-image"
		src={(navPage.iref.match('^(http|data)') !== null ? '' : base + '/img/') + navPage.iref}
		alt="card"
	/>
	<div class="page-card-content">
		<p class="page-type">{pageType.toLocaleUpperCase()}</p>
		<p class="page-title">{navPage.title}</p>
		{#if includeSubtitle}
			<p class="page-subtitle">{navPage.subtitle}</p>
		{/if}
	</div>
</Card>

<style>
	.page-card-image {
		object-fit: cover;
		height: 200px;
		width: 100%;
	}
	.page-card-content {
		margin: 0;
		padding: 12px 20px 20px 20px;
	}
	.page-type {
		font-size: 0.7rem;
		font-weight: 400;
		margin: 0;
	}
	.page-title {
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.25;
		margin: 0;
	}
	.page-subtitle {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.25;
		margin: 6px 0 0 0;
	}
</style>
