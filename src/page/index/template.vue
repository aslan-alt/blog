<template>
  <div>
    <div id="index">
      <section class="blog-posts">
        <ul>
          <li class="item" v-for="(blog,index) in blogs" :key="index">
            <figure class="avatar">
              <img :src="blog.user.avatar" alt />
              <figcaption class="username">{{blog.user.username}}</figcaption>
            </figure>
            <div class="content">
              <h3>
                <router-link class="title" :to="`/detail/${blog.id}` ">
                  {{blog.title}}
                  <span class="date">{{friendlyDate(blog.createdAt)}}</span>
                </router-link>
              </h3>
              <p>
                <router-link class="description" :to="`/detail/${blog.id}` ">{{blog.description}}</router-link>
              </p>
            </div>
          </li>
        </ul>
        <el-pagination
          class="pagination"
          @current-change="onPageChange"
          :page-size="10"
          :pager-count="7"
          :current-page="page"
          layout="prev, pager, next"
          :total="total"
        ></el-pagination>
      </section>
    </div>
    <section></section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" >
@media (min-width: 768px) {
  #index {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  .blog-posts {
    width: 70vw;
  }
  .pagination {
    display: flex;
    justify-content: space-around;
  }
  .item {
    display: flex;
    padding: 10px 0;
    .username {
      font-size: 14px;
      display: inline-block;
      white-space: nowrap;
      max-width: 4em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    padding-right: 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .title {
      font-size: 18px;
      color: black;
      padding-right: 10px;
      display: inline-block;
      white-space: nowrap;
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      .date {
      font-size: 9px;
      color: gray;
    }
    }
    
    .description {
      
      color: black;
    }
  }
  img {
    height: 60px;
    border-radius: 50%;
    padding-right: 8px;
  }

  p {
    overflow: hidden;
  }
}
@media (max-width: 468px) {
  #index {
    display: flex;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
  }
  .pagination {
    display: flex;
    justify-content: space-around;
  }
  .item {
    display: flex;
    padding: 10px 0;
    .username {
      font-size: 14px;
      display: inline-block;
      white-space: nowrap;
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    height: 30px;
    border-radius: 50%;
    padding-right: 8px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      display: inline-block;
      white-space: nowrap;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 15px;
      color: black;
      padding-right: 10px;
    }
    .date {
      font-size: 9px;
      color: gray;
    }
    .description {
      color: black;
    }
  }
  p {
    overflow: hidden;
  }
}
</style>
