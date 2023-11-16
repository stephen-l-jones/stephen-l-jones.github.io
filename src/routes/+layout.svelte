<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let darkStore = writable(false);
	setContext('darkMode', darkStore);

	let mounted = false;
	onMount(() => {
		const theme = localStorage.getItem('dark') || 'light';
		darkStore.set(theme === 'dark');

		mounted = true;
	});

	$: if (mounted) {
		localStorage.setItem('dark', $darkStore ? 'dark' : 'light');
	}
</script>

<div
	class="container"
	style:--background-color={$darkStore ? '#222222' : 'white'}
	style:--font-color={$darkStore ? 'white' : '#222222'}
	style:--hover-color={$darkStore ? '#3b3b3b' : '#eeeeee'}
	style:--active-background-color={$darkStore ? '#555555' : '#dddddd'}
	style:--active-hover-color={$darkStore ? '#6e6e6e' : '#cccccc'}
	style:--md-a-color={$darkStore ? '#73a1eb' : '#0959da'}
	style:--md-code-background-color={$darkStore ? '#3b3b3b' : '#eeeeee'}
>
	<nav>
		<a href="{base}/">Home</a>
		<a href="{base}/articles">Articles</a>
		<a href="{base}/cases">Cases</a>
		<div class="toggle-button">
			<label class="toggle-theme" for="checkbox">
				<input type="checkbox" id="checkbox" bind:checked={$darkStore} />
				<div class="slider" />
			</label>
		</div>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		--body-font: Inter, Roboto, Helvetica, Arial, sans-serif;
		--markdown-font: 'PT Serif', Georgia, 'Times New Roman', serif;
		--monospace-font: 'PT Mono', Monaco, 'Courier New';
		font-family: var(--body-font);
		line-height: 1.5;
		background-color: var(--background-color);
		color: var(--font-color);
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		transition: 0.25s;
	}
	nav {
		float: left;
		overflow: hidden;
		padding: 16px 8px 8px 8px;
		font-weight: 600;
	}
	nav a {
		text-align: center;
		padding: 12px;
	}
	nav a:visited {
		color: var(--font-color);
		font-weight: 600;
	}

	main {
		padding: 8px;
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
		background-color: var(--hover-color);
	}
	:global(button) {
		background-color: var(--background-color);
		color: var(--font-color);
		border-radius: 18px;
		border: 1px solid #aaaaaa;
		padding: 3px 15px;
		font-size: 1rem;
		cursor: pointer;
		margin: 2px 0;
		transition: 0.25s;
	}
	:global(button):hover {
		background-color: var(--hover-color);
	}

	.toggle-button {
		float: right;
		align-items: center;
	}
	.toggle-theme {
		display: inline-block;
		position: relative;
		width: 36px;
		height: 24px;
	}
	.toggle-theme input {
		display: none;
	}
	.slider {
		background-color: #aaaaaa;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 4px;
		border-radius: 20px;
		cursor: pointer;
		transition: 0.4s;
	}
	.slider:before {
		content: '';
		background-color: var(--background-color);
		bottom: 2px;
		left: 2px;
		height: 16px;
		width: 16px;
		position: absolute;
		border-radius: 50%;
		transition: 0.25s;
	}
	input:checked + .slider:before {
		transform: translateX(16px);
	}
</style>
