<script lang="ts">
	import SourceCard from './SourceCard.svelte';
	import PageCard from './PageCard.svelte';
	export let sources: Source[] = [];
	export let navPage: NavPage;

	$: scenario = {
		...navPage,
		slug: navPage.slug + '/scenario',
		folder: ''
	};
</script>

<ul role="list" class="case-card-grid">
	<PageCard navPage={scenario} pageType="scenario" includeSubtitle={true} borderColor="#f8882d" />
	{#each sources as source}
		<SourceCard {source} />
	{/each}
</ul>

<style>
	.case-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 12px;
		padding: 0;
		margin: 12px 0;
	}
</style>
