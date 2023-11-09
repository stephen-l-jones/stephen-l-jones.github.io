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

{#if !!data.navPage.strap}
	<h5>{data.navPage.strap}</h5>
{/if}
<h1>{data.navPage.title}</h1>
{#if !!data.navPage.subtitle}
	<h4>{data.navPage.subtitle}</h4>
{/if}
<Figure href="../img/{data.navPage.iref}" />
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
