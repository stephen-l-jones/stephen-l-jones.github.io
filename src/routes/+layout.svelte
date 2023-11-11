<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
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
	:root {
		--font-family-san-serif: Inter, Roboto, Helvetica, Arial, sans-serif;
		--font-family-serif: 'PT Serif', Georgia, 'Times New Roman', serif;
		--font-family-monospaced: 'PT Mono', Monaco, 'Courier New';
		--font-color: #222222;
		--hover-color: #eeeeee;
		--border-color: #dddddd;
	}

	* {
		font-family: var(--font-family-san-serif);
		line-height: 1.5;
		color: var(--font-color);
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
		color: var(--font-color);
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
		background-color: var(--hover-color);
	}

	:global(p) {
		margin: 0;
	}
	:global(a) {
		text-decoration: none;
	}

	:global(a):visited {
		color: var(--font-color);
	}
	:global(a):link {
		color: var(--font-color);
	}

	:global(a):hover {
		color: var(--font-color);
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
		background-color: var(--hover-color);
	}
</style>
