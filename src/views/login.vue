<template>
  <div class="login">
    <div class="loginBox">
      <p class="logo">登录</p>
      <div class="boxContain">
        <div class="boxItem">
          <span>用户名:</span><input type="text" v-model="phone" />
        </div>
        <div class="boxItem">
          <span>密码:</span><input type="password" v-model="password" />
        </div>
      </div>
      <button class="submit" @click="login()">登录</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      phone: '',
      password: ''
    }
  },
  methods:{
    login: function () {
      this.$api.user.login({
        phone: this.phone,
        password: this.password
      }).then((res)=>{
        if(res.data.code === 200){
          window.sessionStorage.setItem('userId',res.data.data.userId)
          this.$router.push({
            name: 'info'
          })
        }else{
          alert(res.data.msg)
        }
      })
    }
  }
}
</script>

<style lang="less">
  .login{
    background: #f9f9f9;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .loginBox{
      width: 25rem;
      height: 25rem;
      border: solid 1px #ddd;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-between;
      .logo{
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 40px;
        font-size: 0.9rem;
        border: solid 1px #ddd;
        margin-top: -40px;
        background: #fff;
      }
      .submit{
        margin-bottom: 2rem;
        width: 100px;
        height: 36px;
        border: none;
        outline: none;
        background: #37A8E0;
        color: #fff;
        cursor: pointer;
      }
      .boxContain{
        width: 100%;
        padding: 0 4rem;
        .boxItem{
          width: 100%;
          margin-bottom: 1rem;
          span{
            height: 1.5rem;
            display: block;
            width: 100px;
            padding-right: 1rem;
            text-align: left;
            font-size: 0.9rem;
          }
          input{
            width: 100%;
            height: 2rem;
            border: solid 1px #ddd;
            padding: 0 0.5rem;
          }
          input:focus{
            border: solid 1px #37A8E0;
          }
        }
      }
    }
  }
</style>
