<script lang="ts">
	export let href = '';
	export let title: string | undefined = undefined;
	export let text = '';

	let img: HTMLImageElement;
	let width: number = 0;

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
		<figcaption>{title || ''}</figcaption>
		<picture>
			<img alt={text} src={href} bind:this={img} />
		</picture>
	</figure>
</div>

<style>
	img {
		width: 100%;
	}
</style>
