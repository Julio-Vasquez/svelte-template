<script lang="ts">
  import { Router } from 'svelte-navigator'

  import PublicRoutes from './public.svelte'
  import PrivateRoutes from './private.svelte'

  export let auth: boolean = false
</script>

<Router primary={false}>
  {#if auth}
    <PrivateRoutes />
  {:else}
    <PublicRoutes />
  {/if}
</Router>
