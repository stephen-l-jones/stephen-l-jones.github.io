<script lang="ts">
	import type { PageData } from './$types';
	import MdPage from '$lib/components/MdPage.svelte';

	export let data: PageData;

	let count = 0;
	$: mdScenario = data.mdScenario;
	$: navPage = data.navPage;
	$: {
		count++;
		void navPage;
		void mdScenario;
	}
</script>

{#key count}
	<MdPage markdown={mdScenario} {navPage} />
{/key}
