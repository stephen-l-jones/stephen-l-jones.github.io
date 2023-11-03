<script lang="ts">
	import PageCardGrid from '../../lib/components/PageCardGrid.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let casePages = data.navPages.filter((navPage) => navPage.folder === 'cases');
</script>

<PageCardGrid pages={casePages} />
