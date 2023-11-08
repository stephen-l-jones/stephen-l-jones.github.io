<script lang="ts">
	export let text = '';

	let fn = text.replace(/\[\^.+?\]/g, (endnote, index) => {
		let endnote_id = endnote.replace(/(^\[\^|\]$)/g, '');
		return (
			'<a id="note-' +
			endnote_id +
			'" href="#end-' +
			endnote_id +
			'""><sup>' +
			endnote_id +
			'</sup></a>'
		);
	});
</script>

{@html fn}
