<script lang="ts">
  import { Button } from 'sveltestrap'

  import ModalController from './components/UI/ModalControlled.svelte'
  import Loading from './components/Custom/Loading/Loading.svelte'
  import Loading2 from './components/Custom/Loading2/Loading.svelte'
  import InvalidToken from './components/Custom/InvalidToken/InvalidToken.svelte'
  import logo from './assets/svelte.png'

  export let appName: string
  let open: boolean = false
  const changeDialog = () => (open = !open)
  //prop from children
  let nombre: string
</script>

<main class="container-fluid">
  <div>
    <InvalidToken />

    <Button on:click={changeDialog} color="success">open modal</Button>
  </div>
  <ModalController
    title={'Example Modal'}
    {open}
    {changeDialog}
    bind:victor={nombre}
  >
    <p>hola</p>
  </ModalController>
</main>

<style lang="scss">
</style>
