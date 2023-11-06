<script lang="ts">
	import { markdownWidth } from '$lib/constants';

	export let href = '';
	export let title: string | undefined = undefined;
	export let text = '';

	let img: HTMLImageElement;
	let width: number = 0;
	let hrefSmall =
		href.substring(0, href.lastIndexOf('.')) + '-sm' + href.substring(href.lastIndexOf('.'));

	$: if (img) {
		img.addEventListener('load', () => {
			width = img.naturalWidth;
		});
	}
</script>

<div
	class="markdown-figure"
	style="margin-left: min(50% - calc(min(100vw, {width}px)/2 - 10px), 10px); width: min(calc(100vw - 20px), {width}px)"
>
	<figure style="margin: 1em 0;">
		<figcaption>{text}</figcaption>
		<picture>
			<source media="(max-width: {markdownWidth - 1}px)" srcset={hrefSmall} />
			<source media="(min-width: {markdownWidth}px)" srcset={href} />
			<img alt={text} src={href} bind:this={img} />
		</picture>
	</figure>
</div>

<style>
	img {
		width: 100%;
	}
</style>
