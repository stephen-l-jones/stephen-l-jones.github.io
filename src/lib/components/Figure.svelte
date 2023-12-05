<script lang="ts">
	import { markdownWidth } from '$lib/constants';

	export let href = '';
	export let text = '';

	let img: HTMLImageElement;
	let width: number = 0;
	let smallImgExists = href.indexOf('#small') !== -1;
	let hrefNormal = href;
	let hrefSmall =
		href.substring(0, href.lastIndexOf('.')) + '-sm' + href.substring(href.lastIndexOf('.'));

	hrefNormal.replace('#small', '');
	hrefSmall.replace('#small', '');

	$: if (img) {
		img.addEventListener('load', () => {
			width = img.naturalWidth;
			console.log(width);
		});
	}
</script>

<div
	class="markdown-figure"
	style="margin-left: calc(50% - (.5 * min(calc(100vw - 40px), calc({width}px)))); width: max(min(calc(100vw - 40px), {width}px), {markdownWidth.min}px)"
>
	<figure style="margin: 1em 0;">
		<figcaption>{text}</figcaption>
		<picture>
			<source
				media="(max-width: {markdownWidth.max - 1}px)"
				srcset={smallImgExists ? hrefSmall : hrefNormal}
			/>
			<source media="(min-width: {markdownWidth.max}px)" srcset={hrefNormal} />
			<img alt={text} src={hrefNormal} bind:this={img} />
		</picture>
	</figure>
</div>

<style>
	img {
		width: 100%;
		background-color: white;
	}
</style>
