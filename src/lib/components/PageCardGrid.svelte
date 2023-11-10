<script lang="ts">
	import PageCard from './PageCard.svelte';
	export let pages: NavPage[] = [];
</script>

<ul role="list" class="page-card-grid">
	{#each pages as navPage}
		<PageCard
			{navPage}
			pageType={navPage.folder === 'articles'
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
		grid-gap: 12px;
		padding: 0;
		margin: 12px 0;
	}
</style>
