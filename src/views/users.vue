<template>
    <div class="users">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "users"
  }
</script>

<style lang="less">
  .users{
      height: 100%;
      width: 100%;
  }
</style>