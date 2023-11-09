<script lang="ts">
	import type { PageData } from './$types';
	import MdPage from '$lib/components/MdPage.svelte';

	export let data: PageData;

	let count = 0;
	$: mdArticle = data.mdArticle;
	$: navPage = data.navPage;
	$: {
		count++;
		void navPage;
		void mdArticle;
	}
</script>

{#key count}
	<MdPage markdown={mdArticle} {navPage} />
{/key}
