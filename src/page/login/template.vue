import { mapActions } from 'vuex';
<template>
  <div class="login">
   
    <div>
      <h4>用户名</h4>
      <input v-model="username" placeholder="用户名">
      <h4>密码</h4>
      <input v-model="password" placeholder="密码" type="password" @keyup.enter="onLogin">
      <button size="medium" @click="onLogin">立即登录</button>
      <p class="notice">
        没有账号?
        <router-link to="/register">注册新用户</router-link>
      </p>
    </div>
  </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    ...mapActions(['login']),
    onLogin(){
      this.login({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
    }
  }
};
</script>
<style lang="less" scoped>

.login {
   height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login > div{
  display: flex;
  flex-direction: column;
  
}
input{
  width: 270px;
  line-height: 40px;
  border: 1px solid #eaeaea;
  padding: 0 10px;
  border-radius: 4px;
  outline: none;
}
input:focus {
  border-color: black;
  }
button {
  outline: none;
  border: 1px solid black;
  background: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
}
button:hover {
  background: rgba(0, 0, 0, 1);
  color: white;
}
h4 {
  font-size: 15px;
  margin: 5px 2px;
}
a{
  color: grey;
}
</style>
