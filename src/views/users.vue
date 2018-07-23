<template>
    <div class="users">
        <header>
            <p class="logo">U Know</p>
            <div class="nav">
                <span>主页</span>
                <span>{{user}}</span>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "users",
    data(){
      return {
        user: ''
      }
    },
    mounted(){
      this.user = window.sessionStorage.getItem('user')
    }
  }
</script>

<style lang="less">
  .users{
      height: 100%;
      width: 100%;
      header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 10%;
          padding: 0 8%;
          background: #f9f9f9;
          .logo{
              font-size: 2rem;
              margin: 0;
          }
          .nav{
              font-size: 1.1rem;
              span{
                  margin-left: 1rem;
              }
          }
      }
  }
</style>