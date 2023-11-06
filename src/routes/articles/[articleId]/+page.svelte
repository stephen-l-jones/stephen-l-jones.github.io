<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Figure from '$lib/components/Figure.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<SvelteMarkdown source={data.mdArticle} renderers={{ image: Figure }} />
