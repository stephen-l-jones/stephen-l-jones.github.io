<script lang="ts">
	import temml from 'temml';

	export let text = '';
	export let raw = '';

	let isCode = raw.startsWith('``');
</script>

{#if isCode}
	<code>{text}</code>
{:else}
	{@html temml.renderToString(text, { displayMode: false, throwOnError: false })}
{/if}
