<script lang="ts">
	import SortButton from '../../../lib/components/SortButton.svelte';
	import CaseCardGrid from '../../../lib/components/CaseCardGrid.svelte';
	import TagButton from '../../../lib/components/TagButton.svelte';
	import type { PageData } from './$types';
	import { tagNames } from '$lib/constants';
	export let data: PageData;

	let sortOrder: 'ascending' | 'descending' = 'ascending';

	let tagFilter: Set<string> = new Set();
	$: relevantTags = tagNames.filter(
		(x) => !!data.pageSources.find((source) => source.tags.includes(x))
	);

	$: pageSources =
		tagFilter.size > 0
			? data.pageSources.filter((source) => !!source.tags.find((tag) => tagFilter.has(tag)))
			: data.pageSources;

	$: {
		pageSources.sort((a, b) => {
			switch (sortOrder) {
				case 'ascending':
					return a.date.getTime() - b.date.getTime();
				case 'descending':
					return b.date.getTime() - a.date.getTime();
			}
		});

		pageSources = pageSources;
	}

	function tagClicked(e: CustomEvent<{ tag: string }>) {
		if (tagFilter.has(e.detail.tag)) {
			tagFilter.delete(e.detail.tag);
		} else {
			tagFilter.add(e.detail.tag);
		}

		tagFilter = tagFilter;
	}
	function clearTags(e: MouseEvent) {
		tagFilter.clear();
		tagFilter = tagFilter;
	}
</script>

<div class="button-row">
	<SortButton label="Date" bind:sortOrder />
	<span style="border-right: 1px solid #aca6a2; margin: 6px 10px;" />
	{#each relevantTags as tagName}
		<TagButton tag={tagName} filterOn={tagFilter.has(tagName)} on:click={tagClicked} />&nbsp;
	{/each}
	<button
		on:click={clearTags}
		style="font-size: 1.4rem; border: 0; background-color: white; cursor:pointer; padding: 1px 4px;"
		>×</button
	>
</div>

<CaseCardGrid sources={pageSources} navPage={data.navPage} />

<style>
	.button-row {
		white-space: nowrap;
		overflow-y: hidden;
		overflow-x: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		padding: 0 0 6px 0;
		margin: 6px 0;
	}
</style>
