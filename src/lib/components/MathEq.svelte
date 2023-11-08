<script lang="ts">
	import temml from 'temml';

	export let text = '';
	// text.replaceAll("'", 'xx');
	console.log();
	const mathML = temml.renderToString(text, { throwOnError: false });
	// console.log(text, mathML);
</script>

{@html mathML}
