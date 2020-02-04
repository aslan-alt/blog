<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" />
      <h3>{{user.username}}</h3>
    </section>

    <div class="content" v-for="blog in blogs" :key="blog.id">
      <div class="item">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <article>
          <h3><router-link :to="`/detail/${blog.id}`">{{blog.title}}</router-link></h3>
          <p><router-link :to="`/detail/${blog.id}`">{{blog.description}}</router-link></p>
        </article>
      </div>
    </div>
     <el-pagination
          class="pagination"
          @current-change="onPageChange"
          :page-size="10"
          :pager-count="7"
          :current-page="page"
          layout="prev, pager, next"
          :total="total"
        ></el-pagination>
      
  </div>
  
</template>


<script src="./template.js">

</script>
<style lang="less" scoped>
#user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.user-info {
  display: flex;
  width: 76vw;
  align-items: flex-end;
  h3 {
    padding-left: 10px;
  }
  img {
    width: 60px;
    border-radius: 50%;
  }
}
.content {
  width: 76vw;

  .item {
    display: flex;
    margin-top: 10px;
    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px;

      .day {
        font-size: 40px;
        color: gray;
      }
      .month {
        font-size: 14px;
        color: gray;
      }
      .year {
        font-size: 14px;
        color: gray;
      }
    }
    article {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      h3 {
        padding-top: 20px;
        padding-bottom: 17px;
        a{
          color: black;
        }
        
      }
      p {
        width: 50vw;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        a{
          color: black;
        }
      }
    }
  }
}
</style>
