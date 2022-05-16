<script lang="ts">
  import { Route } from 'svelte-navigator'

  import { GeneratePaths } from './../utils/functions/generatePaths'
  import DinamyComponents from './../components/Utils/Lazy.svelte'
</script>

<Route path="/">
  <DinamyComponents url={GeneratePaths('public', 'Home')} />
</Route>

<Route path="/home">
  <DinamyComponents url={GeneratePaths('public', 'Home')} />
</Route>

<Route path="/login">
  <DinamyComponents url={GeneratePaths('public', 'Login')} />
</Route>

<Route path="/singup">
  <DinamyComponents url={GeneratePaths('public', 'Signup')} />
</Route>

<Route path="*">
  <p>FFFFFFF</p>
</Route>
