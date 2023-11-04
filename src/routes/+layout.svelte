<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import Breadcrumbs from '../lib/components/Breadcrumbs.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let data: LayoutData;

	$: ({ navPages } = data);
</script>

<div class="container">
	<nav>
		<ul>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/cases">Cases</a></li>
			<li><a href="{base}/articles">Articles</a></li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	* {
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue,
			Arial, Noto Sans, sans-serif;
		line-height: 1.5;
		color: #222222;
	}
	.container {
		display: flex;
		flex-direction: column;
	}
	nav {
		padding: 12px;
	}
	main {
		flex-grow: 1;
		padding: 6px 12px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		font-weight: 600;
	}
	ul a:visited {
		color: #222222;
		font-weight: 600;
	}
	li {
		float: left;
	}
	li a {
		text-align: center;
		display: block;
		padding: 12px;
	}
	li a:hover {
		background-color: #eeeeee;
	}

	:global(p) {
		margin: 0;
	}
	:global(a) {
		text-decoration: none;
	}

	:global(a):visited {
		color: #222222;
	}
	:global(a):link {
		color: #222222;
	}

	:global(a):hover {
		color: #222222;
	}
	:global(button) {
		background-color: white;
		border-radius: 18px;
		border: 1px solid #666666;
		padding: 3px 15px;
		font-size: 1rem;
		cursor: pointer;
		margin: 2px 0;
	}
	:global(button):hover {
		background-color: #eeeeee;
	}
</style>
