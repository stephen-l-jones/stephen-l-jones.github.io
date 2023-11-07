<script lang="ts">
	import { markdownWidth } from '$lib/constants';
	import Page from '../../routes/+page.svelte';

	export let href = '';
	export let text = '';

	let img: HTMLImageElement;
	let width: number = 0;
	let hrefSmall = imageURL(
		href.substring(0, href.lastIndexOf('.')) + '-sm' + href.substring(href.lastIndexOf('.')),
		href
	);

	function imageURL(url: string, altUrl: string) {
		const img = new Image();
		img.src = url;
		if (img.complete) {
			return url;
		} else {
			img.onload = () => {
				return url;
			};
			img.onerror = () => {
				return altUrl;
			};
		}
		return '';
	}

	$: if (img) {
		img.addEventListener('load', () => {
			width = img.naturalWidth;
		});
	}
</script>

<div
	class="markdown-figure"
	style="margin-left: calc(50% - min(calc(100vw - 40px), {width}px)/2); width: max(min(calc(100vw - 40px), {width}px), {markdownWidth.min}px)"
>
	<figure style="margin: 1em 0;">
		<figcaption>{text}</figcaption>
		<picture>
			<source media="(max-width: {markdownWidth.max - 1}px)" srcset={hrefSmall} />
			<source media="(min-width: {markdownWidth.max}px)" srcset={href} />
			<img alt={text} src={href} bind:this={img} />
		</picture>
	</figure>
</div>

<style>
	img {
		width: 100%;
	}
</style>
