<script lang="ts">
	import PageCardGrid from '../../lib/components/PageCardGrid.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let articlePages = data.navPages.filter((navPage) => navPage.folder === 'articles');
</script>

<PageCardGrid pages={articlePages} />
