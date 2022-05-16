<script lang="ts">
  import { Button } from 'sveltestrap'

  import { AuthService } from './services/auth.service'

  import ModalController from './components/UI/ModalControlled.svelte'
  import InvalidToken from './components/Custom/InvalidToken/InvalidToken.svelte'

  import RoutesApp from './routes/routes.svelte'

  export let appName: string
  let open: boolean = false
  const changeDialog = () => (open = !open)
  //prop from children
  let nombre: string

  let auth: boolean = true
  const { Login, GetState } = AuthService()
  Login({ token: '123', userName: 'v.prada25', auth: true })
  Login({ token: '124', userName: 'julioo', auth: true })

  const { authenticate, token, userName } = GetState()
  /*

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
*/
</script>

<main class="container-fluid">
  {userName}
  <RoutesApp auth={authenticate} />
</main>

<style lang="scss">
</style>
