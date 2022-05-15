<script lang="ts">
  export let message: string = ''
  console.log(message)
</script>

<div class="loading">
  <div class="loading_content">
    <div class="shape shape-1" />
    <div class="shape shape-2" />
    <div class="shape shape-3" />
    <div class="shape shape-4" />
  </div>
  <p>{message}</p>
</div>

<style lang="scss">
  @import './loading.scss';
</style>
