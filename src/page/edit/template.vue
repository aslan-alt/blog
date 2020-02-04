<template>
  <div class="main">
    <div id="create">
      <h1>创建文章</h1>
      <h3>文章标题</h3>
      <el-input placeholder="限30个字" v-model="title"></el-input>

      <h3>内容简介</h3>
      <el-input v-model="description" placeholder="限30个字" type="textarea" rows="2" resize="none"></el-input>

      <h3>文章内容</h3>
      <el-input v-model="content" type="textarea" rows="8" resize="none" class="content"></el-input>
      <p>
        是否展示到首页
        <label>
          <el-switch v-model="atIndex" active-color="green" inactive-color="red"></el-switch>
        </label>
      </p>
      
      <el-button @click="onEidt">确定</el-button>
    </div>
  </div>
</template>

<script>
import blog from "@/api/blog.js";
export default {
  data() {
    return {
      blogId:null,
      title: "",
      description: "",
      content: "",
      atIndex: false
    };
  },
  created(){
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId:this.blogId}).then(res=>{
      console.log(res)
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
    })
  },
  methods: {
    onEidt() {
      blog.updateBlog({blogId:this.blogId},{title: this.title,content: this.content,description: this.description,atIndex: this.atIndex})
      .then(res=>{
        this.$message.success(res.msg)
        this.$router.push({path:`/detail/${res.data.id}`})
      })
    }
  }
};
</script>

<style lang="less" scoped>
@media (min-width: 768px) {
  .main {
    display: flex;
    justify-content: center;
  }
  #create {
    margin-top: 20px;
    width: 60vw;
  }

  button {
    border: 1px solid gray;
    margin-top: 10px;
    border-radius: 4px;
  }
}
@media (max-width: 468px) {
  .main {
    display: flex;
    justify-content: center;
  }
  #create {
    margin-top: 20px;
    width: 80vw;
    h1 {
      font-size: 20px;
    }
  }

  button {
    border: 1px solid gray;
    margin-top: 10px;
    border-radius: 4px;
  }
}
</style>