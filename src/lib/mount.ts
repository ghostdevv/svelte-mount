import { onMount } from 'svelte';

export const mounted = {
    subscribe(fn) {
        fn(false);
        onMount(() => fn(true));
        return () => {};
    },
};
