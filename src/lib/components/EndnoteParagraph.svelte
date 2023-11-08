<script lang="ts">
	export let text = '';
	let isEndnote = !!text.match(/^\[\^.+?\]/g);
</script>

{#if isEndnote}
	<p class="endnote"><slot /></p>
{:else}
	<p><slot /></p>
{/if}
