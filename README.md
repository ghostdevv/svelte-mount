# Svelte Mount

Svelte Mount provides both a store and component that signals whether a component is mounted.

# Installing

This library is Svelte 5 only, if you want Svelte 3/4 use [svelte-mount@2](https://www.npmjs.com/package/svelte-mount/v/2.0.0).

```sh
npm install svelte-mount -D
```

# Using

To use you have two options, a component or a store:

-   ## Component

    This component can be incredibly useful if your content should only show once the component is mounted, such as using a animation with svelte kit or routify and only running the animation when the page is loaded

    ```html
    <script>
    	import { fly } from 'svelte/transition';
    	import { Mount } from 'svelte-mount';
    </script>

    <Mount>
    	<div in:fly="{{ y: -20 }}">Hello World</div>
    </Mount>
    ```

-   ## Store

    Below is an example of how you might want to be able to reactively check if your component is mounted or not and then use that information for something that requires it to be mounted. Thanks to [Blu](https://github.com/bluwy) for this store

    ```html
    <script>
    	import { mounted } from 'svelte-mount';

    	$effect(() => {
    		if ($mounted) {
    			console.log(document.getElementById('example').innerHTML);
    		}
    	});
    </script>

    <h1 id="example">Hello World</h1>
    ```

# Support

-   Join the [discord](https://discord.gg/2Vd4wAjJnm)<br>
-   Create a issue on the [github](https://github.com/ghostdevv/svelte-mount)
