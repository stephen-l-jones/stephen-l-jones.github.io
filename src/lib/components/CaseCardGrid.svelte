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
	<PageCard navPage={scenario} cardCategory="scenario" includeSubtitle={true} />
	{#each sources as source (source.href)}
		<SourceCard {source} />
	{/each}
</ul>

<style>
	.case-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 8px;
		padding: 0;
		margin: 0;
	}
</style>
