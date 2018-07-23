<template>
  <div class="info">
    <div class="left">
      <p class="active">用户信息</p>
      <p>我的消息</p>
      <p>我的关注</p>
      <p>我的发布</p>
      <p>我的钱包</p>
    </div>
    <div class="right">
      <p>用户名：{{userInfo.name}}</p>
      <p>昵称：{{userInfo.nick}}</p>
      <p>邮箱：{{userInfo.email}}</p>
      <p>手机号码：{{userInfo.phone}}</p>
      <p>加入时间：{{new Date(userInfo.create).toLocaleDateString()}}</p>
    </div>

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
          window.sessionStorage.setItem('user',this.userInfo.name)
        }
      })
    }
  }
</script>

<style lang='less'>
  .info{
    height: 90%;
    display: flex;
    background: #fff;
    .left{
      min-width: 15rem;
      padding-top: 2rem;
      p{
        font-size: 0.9rem;
        line-height: 2;
        cursor: pointer;
      }
      .active{
        color: #2c98e4;
      }
    }
    .right{
      flex: 1;
      border-left: solid 1px #ddd;
      min-height: 100%;
    }
  }
</style>