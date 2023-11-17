<script lang="ts">
	import { base } from '$app/paths';
	import Card from './Card.svelte';
	export let source: Source;
	export let cardCategory = 'source';

	function formatFragment(date: Date, options: Intl.DateTimeFormatOptions) {
		const formatter = new Intl.DateTimeFormat('en', {
			timeZone: 'UTC',
			...options
		});

		return formatter.format(date);
	}

	function dateShortFormat(date: Date) {
		const options: Intl.DateTimeFormatOptions[] = [
			{ day: 'numeric' },
			{ month: 'short' },
			{ year: 'numeric' }
		];

		return options.map((options) => formatFragment(date, options)).join(' ');
	}
</script>

<Card href={source.href} target="_blank" {cardCategory} cardId="{source.slug} {source.href}">
	<img
		class="source-card-image"
		src={(source.iref.match('^(http|data)') !== null ? '' : base + '/img/') + source.iref}
		alt="card"
	/>
	<div class="source-card-content">
		<p class="source-media">{source.media.toLocaleUpperCase()}</p>
		<p class="source-headline">
			{source.headline}
		</p>
		<p class="source-publisher">
			<em>{source.publisher}</em>
		</p>
		<p class="source-date">
			{dateShortFormat(source.date)}
		</p>
		<div style="flex-grow: 1" />
		<p class="source-tags">{source.tags.join(' • ')}</p>
	</div>
</Card>

<style>
	.source-card-image {
		object-fit: cover;
		height: 200px;
		width: 100%;
	}
	.source-card-content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		margin: 0;
		padding: 12px 20px 20px 20px;
	}
	.source-media {
		font-size: 0.7rem;
		font-weight: 400;
		margin: 0;
	}
	.source-headline {
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.25;
		margin: 0;
	}
	.source-publisher {
		font-size: 1rem;
		font-weight: 400;
		margin: 6px 0 0 0;
	}
	.source-date {
		font-size: 1rem;
		font-weight: 400;
		margin: 0;
	}
	.source-tags {
		font-size: 0.8rem;
		font-weight: 400;
		text-align: right;
		margin: 4px 0 0 0;
	}
</style>
