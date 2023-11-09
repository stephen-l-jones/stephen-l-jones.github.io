<script lang="ts">
	export let sortOrder: string = 'ascending';
	export let label: string;

	let arrow: string = 'south';
	function onClick() {
		sortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
		arrow = sortOrder === 'ascending' ? 'south' : 'north';
	}
</script>

<button on:click={onClick}>
	<div style="white-space: nowrap;">
		<div style="display: table-row;">
			<div style="display: table-cell; vertical-align: middle;">
				<div class="AZ">A</div>
				<div class="AZ">Z</div>
			</div>
			<div style="display: table-cell; vertical-align: middle;">
				<span class="material-icons" style="font-size: 1rem; vertical-align: top;">{arrow}</span>
				{label}
			</div>
		</div>
	</div>
</button>

<style>
	.AZ {
		font-size: 0.6rem;
		line-height: 0.5rem;
		font-weight: 600;
	}
</style>
