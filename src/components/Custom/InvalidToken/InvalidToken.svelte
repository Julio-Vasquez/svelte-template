<script lang="ts">
  export let errorCode: number = 404,
    message: string = 'Invalid Token',
    url: string = '/',
    urlMessage: string = 'Home'
</script>

<div class="invalid_token">
  <div class="no_found">
    <div class="no_found_404">
      <h2>{errorCode}</h2>
      <h3>{message}</h3>
    </div>
    <a href={url}>{urlMessage}</a>
  </div>
</div>

<style lang="scss">
  @import './InvalidToken.scss';
</style>
