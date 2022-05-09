<script lang="ts">
  import { Button } from 'sveltestrap'

  import ModalController from './components/UI/ModalControlled.svelte'
  import logo from './assets/svelte.png'

  export let appName: string
  let open: boolean = false
  const changeDialog = () => (open = !open)
  //prop from children
  let nombre: string
</script>

<main>
  <div class="container">
    <img src={logo} alt="Svelte Logo" />
    <h1>Hello Typescript! - {appName}| {nombre}</h1>
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
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  main {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
    .container {
      img {
        height: 16rem;
        width: 16rem;
      }
      h1 {
        color: #ff3e00;
        font: {
          size: 4rem;
          transform: uppercase;
          weight: 100;
        }
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
      }
    }
  }
</style>
