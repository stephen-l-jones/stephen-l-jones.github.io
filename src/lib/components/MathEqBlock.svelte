<script lang="ts">
	import temml from 'temml';

	export let text = '';
	const mathML = temml.renderToString(text, { displayMode: true, throwOnError: false });
</script>

<p>{@html mathML}</p>
