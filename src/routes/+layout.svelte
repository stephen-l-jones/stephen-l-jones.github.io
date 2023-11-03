<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import Breadcrumbs from '../lib/components/Breadcrumbs.svelte';
	import { page } from '$app/stores';

	export let data: LayoutData;

	$: ({ navPages } = data);
</script>

<div class="container">
	<nav>
		<p class="nav"><a href="/">Home</a></p>
		<p class="nav"><a href="/cases">Cases</a></p>
		<ul>
			{#each navPages.filter((navPage) => navPage.folder === 'cases') as navPage}
				<li class="nav">
					<span class="nav"><a href="/cases/{navPage.slug}">{navPage.name}</a></span>
				</li>
			{/each}
		</ul>
		<p class="nav"><a href="/articles">Articles</a></p>
		<ul>
			{#each navPages.filter((navPage) => navPage.folder === 'articles') as navPage}
				<li class="nav">
					<span class="nav"><a href="/articles/{navPage.slug}">{navPage.name}</a></span>
				</li>
			{/each}
		</ul>
		{#each navPages.filter((navPage) => navPage.folder === '') as navPage}
			<p class="nav"><a href="/{navPage.slug}">{navPage.name}</a></p>
		{/each}
	</nav>
	<main>
		<Breadcrumbs path={$page.url.pathname} {navPages} />
		<slot />
	</main>
</div>

<style>
	* {
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue,
			Arial, Noto Sans, sans-serif;
		line-height: 1.5;
		font-weight: 400;
		color: #4b5563;
	}
	@media (max-width: 700px) {
		nav {
			display: none;
		}
	}

	.container {
		display: flex;
		flex-direction: row;
	}
	nav {
		padding: 12px;
		border-right: 1px solid #d5d7db;
	}
	main {
		flex-grow: 1;
		padding: 6px 12px;
	}

	.nav {
		margin: 0.3rem;
		font-size: 1.1rem;
	}
	.nav a:hover {
		color: black;
	}
	ul {
		padding: 0 0 0 1ch;
		margin: 0;
	}
	li {
		list-style-type: '\00BB';
		list-style-position: outside;
	}
	li .nav {
		position: relative;
		left: 0.5ch;
	}

	:global(p) {
		margin: 0;
	}
	:global(a) {
		text-decoration: none;
	}

	:global(a):visited {
		color: #4b5563;
	}
	:global(a):link {
		color: #4b5563;
	}

	:global(a):hover {
		color: black;
	}
	:global(button) {
		background-color: white;
		border-radius: 18px;
		border: 1px solid #f8882d;
		padding: 3px 15px;
		font-size: 1rem;
		cursor: pointer;
		margin: 2px 0;
	}
	:global(button):hover {
		background-color: #fdefe4;
	}
</style>
