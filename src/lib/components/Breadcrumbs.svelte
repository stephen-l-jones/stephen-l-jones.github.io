<script lang="ts">
	import { base } from '$app/paths';

	interface Breadcrumb {
		label: string;
		href: string;
	}

	export let path: string;
	export let navPages: NavPage[];
	let breadcrumbs: Breadcrumb[] = [];

	// foo

	$: {
		// Remove zero-length tokens.
		const tokens = path.split('/').filter((token) => token !== '') || [];

		// Create { label, href } pairs for each token.
		let tokenPath: string = '';
		breadcrumbs = tokens.map((token) => {
			let label: string = '';

			tokenPath += '/' + token;
			if (token === 'cases') {
				label = 'Cases';
			} else if (token === 'articles') {
				label = 'Articles';
			} else if (token === 'scenario') {
				label = 'Scenario';
			} else {
				label = navPages.find((navPage) => navPage.slug === token)?.name || ' ';
			}
			return {
				label: label,
				href: tokenPath
			};
		});
	}
</script>

<div class="breadcrumbs">
	<span><a href="{base}/">◯</a></span>
	{#each breadcrumbs as breadcrumb, i}
		&gt;
		{#if i == breadcrumbs.length - 1}
			{breadcrumb.label}
		{:else}
			<a href={base + breadcrumb.href}>{breadcrumb.label}</a>&nbsp;
		{/if}
	{/each}
</div>

<style>
	:global(.breadcrumbs) {
		font-size: 1.1rem;
	}
</style>
