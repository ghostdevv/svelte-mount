import type { Readable } from 'svelte/store';
import { onMount } from 'svelte';

export const mounted: Readable<boolean> = {
    subscribe(fn) {
        fn(false);
        onMount(() => fn(true));
        return () => {};
    },
};
