<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Figure from '$lib/components/Figure.svelte';
	import MathEq from '$lib/components/MathEq.svelte';
	import CustomMd from '$lib/components/CustomMd.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// import { marked } from 'marked';

	// const tokens = marked.lexer(data.mdArticle);

	// marked.walkTokens(tokens, (token) => {
	// 	console.log(token);
	// });
</script>

<SvelteMarkdown
	source={data.mdArticle}
	renderers={{ image: Figure, codespan: MathEq, text: CustomMd }}
/>
