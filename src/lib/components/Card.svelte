<script lang="ts">
	export let href: string;
	export let target: string;
	export let borderColor: string = '#d5d7db';
</script>

<div class="card" style="border: 1px solid {borderColor};">
	<a {href} {target}>
		<slot />
	</a>
</div>

<style>
	.card {
		border-radius: 8px;
		box-shadow: 2px 2px 20px -7px #00000022;
		display: flex;
		overflow: hidden;
	}

	a {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
	a:hover {
		background-color: #eeeff1;
	}
</style>
