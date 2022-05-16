<script lang="ts">
  import Loading from '../Custom/Loading/Loading.svelte'

  export let url: string

  const lazy = import(`./../../pages/${url}.svelte`).then(module => module.default)
  console.log(lazy)
</script>

{#await lazy}
  <Loading message="Loading Component" />
{:then Component}
  <Component />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
