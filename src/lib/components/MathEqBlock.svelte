<script lang="ts">
	import temml from 'temml';

	export let text = '';
	const mathML = temml.renderToString(text, { displayMode: true, throwOnError: false });
</script>

<p>{@html mathML}</p>

<style>
	:global(mtd.tml-right) {
		text-align: right;
	}
	:global(mtd.tml-left) {
		text-align: left;
	}
</style>

