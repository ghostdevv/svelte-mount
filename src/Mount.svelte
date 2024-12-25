<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		mounted?: boolean;
		children: Snippet;
	}

	let { mounted = $bindable(false), children }: Props = $props();

	onMount(() => {
		mounted = true;
		return () => (mounted = false);
	});
</script>

{#if mounted}
	{@render children()}
{/if}
