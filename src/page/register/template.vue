<template>
  <div class="container">
    <div class="register">
      <h4>用户名</h4>
      <input v-model="username" placeholder="用户名" />
      <h4>密码</h4>
      <input v-model="password" placeholder="密码" type="password" @keyup.enter="onRegister" />

      <button size="medium" @click="onRegister">立即注册</button>
      <div class="agreement" @click="agreement">
        <label for="agree">
          <svg class="icon" v-if="agree">
            <use xlink:href="#icon-yunxingouxuanzhuangtai-" />
          </svg>
          <svg class="icon" v-else-if="!agree">
            <use xlink:href="#icon-yunxingouxuankuang-" />
          </svg>
          &nbsp;我已阅读并同意相关服务条款和隐私政策
        </label>
      </div>
      <p class="notice">
        <router-link to="/">返回首页</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import selected from "../../assets/selected.svg";
console.log(selected);
import { mapActions } from "vuex";
export default {
  data(){
    return {
      username:'',
      password:'',
      agree: true
    }
  },
  methods:{
    ...mapActions(["register"]),
    onLogin(){
      this.login({username:this.username,password:this.password}).then(()=>{
        this.$router.push({path:'/'})
      })
    },
    onRegister() {
      console.log(this.username,this.password)
      if (this.agree) {
        this.register({
          username:this.username,
          password:this.password
        }).then(() => {
          this.$router.push({ path: "/" });
        });
      } else {
        this.$message({
          showClose: true,
          message: "要勾选协议哦",
          type: "error"
        });
      }
    },
    agreement() {
      this.agree = !this.agree;
    }
  }
};



</script>
<style lang="less" scoped>
.container {
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.register {
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
a{
  color: grey;
}
</style>
