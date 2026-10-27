<script lang="ts">
	import { markdownWidth } from '$lib/constants';

	export let href = '';
	export let text = '';
	export let credit = '';

	let img: HTMLImageElement;
	let width: number = 0;
	let smallImgExists = href.indexOf('#small') !== -1;
	let floatRight = href.indexOf('#right') !== -1;
	let floatLeft = href.indexOf('#left') !== -1;
	let floatSide = floatRight || floatLeft;
	let hrefNormal = href;
	let hrefSmall =
		href.substring(0, href.lastIndexOf('.')) + '-sm' + href.substring(href.lastIndexOf('.'));

	hrefNormal.replace('#small', '');
	hrefSmall.replace('#small', '');

	$: if (img) {
		img.addEventListener('load', () => {
			width = img.naturalWidth;
		});
	}
</script>

<div
	class="markdown-figure"
	class:float-right={floatRight}
	class:float-left={floatLeft}
	style={floatSide
		? undefined
		: `margin-left: calc(50% - (.5 * min(100vw - 40px, ${width}px))); width: max(min(100vw - 40px, ${width}px), ${markdownWidth.min}px)`}
>
	<figure style="margin: 1em 0;" class:has-credit={!!credit}>
		<figcaption>{text}</figcaption>
		<picture>
			<source
				media="(max-width: {markdownWidth.max - 1}px)"
				srcset={smallImgExists ? hrefSmall : hrefNormal}
			/>
			<source media="(min-width: {markdownWidth.max}px)" srcset={hrefNormal} />
			<img alt={text} src={hrefNormal} bind:this={img} />
		</picture>
		{#if credit}
			<p class="credit">{credit}</p>
		{/if}
	</figure>
</div>

<style>
	img {
		width: 100%;
	}
	.has-credit img {
		display: block;
	}
	.credit {
		margin: 0;
		font-size: 0.8rem;
		opacity: 0.7;
	}
	@media (min-width: 640px) {
		.float-right,
		.float-left {
			width: 50%;
		}
		.float-right {
			float: right;
			margin: 0 0 0.5rem 1.2rem;
		}
		.float-left {
			float: left;
			margin: 0 1.2rem 0.5rem 0;
		}
	}
</style>
