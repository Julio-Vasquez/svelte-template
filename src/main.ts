import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: { appName: import.meta.env.VITE_APP_NAME },
})

export default app
