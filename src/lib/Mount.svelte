<script>
    import { onMount } from 'svelte';

    export let mounted = false;

    onMount(() => {
        mounted = true;

        return () => (mounted = false);
    });
</script>

{#if mounted}
    <slot />
{/if}
