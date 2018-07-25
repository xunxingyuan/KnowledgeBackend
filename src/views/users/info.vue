<template>
  <div class="info">
    <div class="left">
      <p v-for="menu in menuList" @click="choseItem(menu)" :class="{'active': menu.id === activeMenu.id}">{{menu.name}}</p>
    </div>
    <div class="right">
      <div class="user" v-if="activeMenu.id === 1">
        <p>用户名：{{userInfo.name}}</p>
        <p>昵称：{{userInfo.nick}}</p>
        <p>邮箱：{{userInfo.email}}</p>
        <p>手机号码：{{userInfo.phone}}</p>
        <p>加入时间：{{new Date(userInfo.create).toLocaleDateString()}}</p>
      </div>
      <div class="publish" v-if="activeMenu.id === 4">
        <p v-for="item in publishList">{{item}}</p>
      </div>
      <div class="wallet" v-if="activeMenu.id === 5">
        {{walletData}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "info",
    data(){
      return {
        activeMenu:{
          id: 1,
          name: '用户信息'
        },
        menuList:[{
          id: 1,
          name: '用户信息'
        },{
          id: 2,
          name: '我的消息'
        },{
          id: 3,
          name: '我的关注'
        },{
          id: 4,
          name: '我的发布'
        },{
          id: 5,
          name: '我的钱包'
        }],
        userInfo: {
          name:'',
          nick: '',
          email: '',
          phone: '',
          create: ''
        },
        publishList: [],
        walletData:''
      }
    },
    methods:{
      getKnowledgeData: function () {
        this.$api.knowledge.query().then((res)=>{
          if(res.data.code === 200){
            this.publishList = res.data.data.lists
          }
        })
      },
      getWallet: function () {
        this.$api.user.getWallet().then((res)=>{
          if(res.data.code === 200){
            this.walletData = res.data.data.wallet
          }
        })
      },
      choseItem: function (item) {
        this.activeMenu = item
        if(item.id === 4){
          this.getKnowledgeData()
        }else if(item.id === 5){
          this.getWallet()
        }
      }
    },
    mounted(){
      let userId = window.sessionStorage.getItem('userId')
      this.$api.user.getUser().then((res)=>{
        if(res.data.code === 200){
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