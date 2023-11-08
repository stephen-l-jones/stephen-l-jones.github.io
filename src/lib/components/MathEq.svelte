<script lang="ts">
	import temml from 'temml';

	export let code = '';

	const mathML = temml.renderToString(code);
	console.log(code, mathML);
</script>

{@html mathML}
