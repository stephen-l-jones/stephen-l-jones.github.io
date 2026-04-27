<script lang="ts">
	export let href = '';
	export let title = '';

	const downloadExts = ['.xlsx', '.xls', '.csv', '.pdf', '.zip'];
	$: isDownload = downloadExts.some(ext => href.endsWith(ext));
</script>

{#if isDownload}
	<a {href} {title} download><slot /></a>
{:else}
	<a {href} {title}><slot /></a>
{/if}
