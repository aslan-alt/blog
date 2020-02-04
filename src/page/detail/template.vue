
<template>
  <div id="detail">
    <section>
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar" />
      <div id="creatInfo">
        <h3>{{title}}</h3>
        <router-link :to=" `/user/${user.id}` ">
          <span>{{user.username}}</span>
          发布于{{friendlyDate(createdAt)}}
        </router-link>
      </div>
    </section>
    <article>
      <p v-html="mardkown"></p>
    </article>
  </div>
</template>

<script>
import blog from "@/api/blog.js";
import marked from "marked";
export default {
  data() {
    return {
      user: {},
      title: "",
      rawContent: "",
      createdAt: "",
      description: ""
    };
  },
  created() {
    this.blogId = this.$route.params.blogId;
    blog.getDetail({ blogId: this.blogId }).then(res => {
      
      this.user = res.data.user;
      this.title = res.data.title;
      this.rawContent = res.data.content;
      this.createdAt = res.data.createdAt;
      this.description = res.data.description;
    });
  },
  computed: {
    mardkown() {
      return marked(this.rawContent);
    }
  }
};
</script>

<style lang="less" scoped>
@media (min-width: 768px) {
  #detail {
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-top: 20px;
    article {
      width: 70vw;
      padding: 10px;
    }
  }
  section {
    display: flex;
    width: 70vw;

    #creatInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
      h3 {
        font-size: 20px;
      }
      a {
        color: gray;
        span {
          color: green;
        }
      }
    }
  }
}
@media (max-width: 468px) {
  #detail {
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-top: 20px;
    article {
      width: 80vw;
      padding: 10px;
    }
  }
  section {
    display: flex;
    width: 80vw;
    border: 1px solid red;
    #creatInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
      h3 {
        font-size: 17px;
        display: inline-block;
        white-space: nowrap;
        width: 8em;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      a {
        color: gray;
        span {
          color: green;
        }
      }
    }
  }
}
</style>