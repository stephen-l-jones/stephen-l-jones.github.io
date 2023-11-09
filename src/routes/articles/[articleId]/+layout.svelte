<div class="markdown">
	<div class="markdown-styling">
		<slot />
	</div>
</div>

<style>
	.markdown {
		display: grid;
		flex-direction: column;
		grid-template-columns: minmax(320px, 640px);
		justify-content: center;
	}
	:global(.markdown-styling) {
		font-family: var(--font-family-serif);
		font-size: 1.1rem;
		color: var(--font-color);
	}
	:global(.markdown-styling h1) {
		font-size: 2.4rem;
		line-height: 1.1;
		margin: 0 0 0.5rem 0;
	}
	:global(.markdown-styling h2) {
		font-size: 1.6rem;
		line-height: 1;
		margin: 2rem 0 0.5rem 0;
	}
	:global(.markdown-styling h3) {
		font-size: 1.2rem;
		line-height: 1;
		margin: 1.3rem 0 0.3rem 0;
	}
	:global(.markdown-styling h4) {
		font-family: var(--font-family-san-serif);
		font-size: 1.1rem;
		font-weight: normal;
		color: var(--font-color);
		margin: 0.5rem 0;
	}
	:global(.markdown-styling h5) {
		font-family: var(--font-family-san-serif);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--font-color);
		margin: 0;
	}
	:global(.markdown-styling h6) {
		font-family: var(--font-family-san-serif);
		font-size: 1rem;
		font-weight: 300;
		color: var(--font-color);
		margin: 0 0 1rem 0;
	}
	:global(.markdown-styling p) {
		margin: 0 0 1rem 0;
	}

	:global(.markdown-styling a) {
		color: #0959da;
		text-decoration: none;
	}
	:global(.markdown-styling a):hover {
		text-decoration: underline;
	}
	:global(.markdown-styling a):link {
		color: rgb(9, 89, 218);
	}
	:global(.markdown-styling a):visited {
		color: rgb(9, 89, 218);
	}
	:global(.markdown-styling .endnote) {
		font-size: 1rem;
	}
	:global(code) {
		font-size: 1.05rem;
		background-color: #f2f2f2;
	}
	:global(.markdown-figure) {
		font-family: var(--font-family-san-serif);
		margin: 1.2rem 0;
	}
</style>
