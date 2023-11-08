<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Figure from '$lib/components/Figure.svelte';
	import MathEq from '$lib/components/MathEq.svelte';
	import MathEqBlock from '$lib/components/MathEqBlock.svelte';
	import Endnote from '$lib/components/Endnote.svelte';
	import EndnoteParagraph from '$lib/components/EndnoteParagraph.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	$: mdArticle = data.mdArticle;

	let count = 0;

	$: {
		count++;
		void mdArticle;
	}
</script>

{#key count}
	<SvelteMarkdown
		source={mdArticle}
		renderers={{
			image: Figure,
			codespan: MathEq,
			code: MathEqBlock,
			paragraph: EndnoteParagraph,
			text: Endnote
		}}
	/>
{/key}
