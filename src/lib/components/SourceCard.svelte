<script lang="ts">
	import { base } from '$app/paths';
	import Card from './Card.svelte';
	export let source: Source;
	export let cardCategory = 'source';

	function dateShortFormat(date: Date, options: Intl.DateTimeFormatOptions[]) {
		function format(option: Intl.DateTimeFormatOptions) {
			let formatter = new Intl.DateTimeFormat('en', option);
			return formatter.format(date);
		}
		return options.map(format).join(' ');
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
			{dateShortFormat(source.date, [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }])}
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
