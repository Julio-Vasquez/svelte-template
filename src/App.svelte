<script lang="ts">
  import logo from './assets/svelte.png'
  export let appName
</script>

<main>
  <div class="container">
    <img src={logo} alt="Svelte Logo" />
    <h1>Hello Typescript! - {appName}</h1>
  </div>
</main>

<style type="text/scss" lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Open Sans', 'Helvetica Neue', sans-serif;
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
