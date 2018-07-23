<template>
  <div class="info">
    <p>用户名：{{userInfo.name}}</p>
    <p>昵称：{{userInfo.nick}}</p>
    <p>邮箱：{{userInfo.email}}</p>
    <p>手机号码：{{userInfo.phone}}</p>
    <p>加入时间：{{new Date(userInfo.create).toLocaleDateString()}}</p>
  </div>
</template>

<script>
  export default {
    name: "info",
    data(){
      return {
        userInfo: {
          name:'',
          nick: '',
          email: '',
          phone: '',
          create: ''
        }
      }
    },
    mounted(){
      let userId = window.sessionStorage.getItem('userId')
      this.$api.user.getUser({
        userId: userId
      }).then((res)=>{
        if(res&&res.data.code === 200){
          this.userInfo = res.data.data
        }
      })
    }
  }
</script>

<style lang='less'>
  .info{
  
  }
</style>