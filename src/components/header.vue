<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">
    <template v-if="isLogin">
      <div class="container">
        <h1>
          <router-link to="/">LET'S SHARE</router-link>
          <router-link to="/create">
            <svg class="icon">
              <use xlink:href="#icon-edit" />
            </svg>
            <span>编辑</span>
          </router-link>
        </h1>
        <div class="user">
          <img
            @click="avatarVisible"
            clas="avatar"
            src="../assets/images.png"
            alt="user.username"
            :title="user.username"
          />
          <ul v-show="Visible" class="setting">
            <li>
              <router-link to="/my">个人主页</router-link>
            </li>
            <li>
              <router-link to="/">返回首页</router-link>
            </li>
            <li>
              <a href="#" @click="logout">注销登录</a>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else-if="!isLogin">
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login">
          <button>立即登录</button>
        </router-link>
        <router-link to="/register">
          <button>注册账号</button>
        </router-link>
      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      Visible: false
    };
  },
  computed: {
    ...mapGetters(["isLogin", "user"])
  },
  created() {
    this.checkLogin();
  },
  methods: {
    ...mapActions(["checkLogin", "logout"]),
    avatarVisible() {
      this.Visible = !this.Visible;
    }
  }
};
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
  header.login {
    display: flex;
    justify-content: center;
    .container {
      display: flex;
      min-height: 60px;
      width: 76vw;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      display: flex;
      align-items: center;

      .icon {
        margin-top: -8px;
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        margin-left: 10px;
      }
      a {
        color: white;
        span {
          font-size: 14px;
          margin-left: -10px;
        }
      }
    }
    .setting {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 2px;
      margin-left: -5px;
      z-index: 1;
      height: 100px;
      justify-content: space-around;
      a {
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        justify-content: center;
        width: 70px;
        border-radius: 4px;
        padding: 5px 5px;
      }
      a :hover {
        background: white;
        border: 0.8px solid gray;
        color: black;
        border-radius: 4px;
      }
    }
    img {
      width: 50px;
      border-radius: 50%;
    }
  }
  header.no-login {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: white;
      margin: 10px 0 10px 0;
    }
    p {
      color: white;
      margin: 0 0 20px 0;
    }
    div.btns {
      display: flex;
      a {
        display: flex;
        button {
          outline: none;
          border: 1px solid white;
          background: white;
          padding: 10px;
          margin: 10px;
          border-radius: 4px;
        }
        :hover {
          background: rgba(255, 255, 255, 0.8);
          color: black;
        }
      }
    }
  }
}
@media (max-width: 468px) {
  header.login {
    display: flex;
    height: 55px;
    align-items: center;
    
    .container {
      
      display: flex;
      width: 100%;
      padding: 0 20px;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      display: flex;
      align-items: center;

      font-size: 20px;
      .icon {
        margin-top: -8px;
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        margin-left: 10px;
      }
      a {
        color: white;
        span {
          font-size: 14px;
          margin-left: -10px;
        }
      }
    }
    .setting {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 2px;
      margin-left: -15px;
      z-index: 1;

      a {
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        width: 70px;
        border-radius: 3px;
        margin-top: 0.8px;
        padding-left: 5px;
      }
    }
    img {
      width: 40px;
      border-radius: 50%;
    }
  
  }
  header.no-login {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: white;
      margin: 10px 0 10px 0;
    }
    p {
      color: white;
      margin: 0 0 20px 0;
    }
    div.btns {
      display: flex;
      a {
        display: flex;
        button {
          outline: none;
          border: 1px solid white;
          background: white;
          padding: 10px;
          margin: 10px;
          border-radius: 4px;
        }
        :hover {
          background: rgba(255, 255, 255, 0.8);
          color: black;
        }
      }
    }
  }
}
</style>