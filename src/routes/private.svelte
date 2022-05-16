<script lang="ts">
  import { Link, Route } from 'svelte-navigator'

  import DinamyComponents from './../components/Utils/Lazy.svelte'
  import { GeneratePaths } from './../utils/functions/generatePaths'
</script>

<Link to="/profile">perfil</Link>
<Link to="/account">cuenta</Link>
<Link to="/">home</Link>

<Route path="/">
  <DinamyComponents url={GeneratePaths('private', 'DashBoard')} />
</Route>

<Route path="profile">
  <DinamyComponents url={GeneratePaths('private', 'Profile')} />
</Route>

<Route path="account">
  <DinamyComponents url={GeneratePaths('private', 'Account')} />
</Route>

<Route path="*">
  <p>FFFFFFF</p>
</Route>
