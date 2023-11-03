<script lang="ts">
	import type { PageData } from './$types';
	import PageCardGrid from '../lib/components/PageCardGrid.svelte';
	export let data: PageData;

	let navPages = data.navPages;
</script>

<PageCardGrid pages={navPages} />
