import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    appName: 'Svelte Template',
  },
})

export default app