<script lang="ts">
	import PageCard from './PageCard.svelte';
	export let pages: NavPage[] = [];
</script>

<ul role="list" class="page-card-grid">
	{#each pages as navPage (navPage.slug)}
		<PageCard
			{navPage}
			cardCategory={navPage.folder === 'articles'
				? 'article'
				: navPage.folder === 'cases'
				? 'case'
				: ''}
			includeSubtitle={false}
		/>
	{/each}
</ul>

<style>
	.page-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 8px;
		padding: 0;
		margin: 0;
	}
</style>
