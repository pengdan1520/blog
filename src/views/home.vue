<template>
  <main class="clear">
    <keep-alive>
      <div style="margin-top: 35px">
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item in navImg" :key="item.value">
            <el-row>
              <el-col :span="24">
                <a href="#">
                  <img :src="item.url" class="banner_img"/>
                </a>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </keep-alive>
    <div class="container homeTop">
      <div class="row" style="margin-top: 50px">
        <div class="col-md-4 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-1.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-2.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-3.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 50px">
        <div class="col-md-4 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-4.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-5.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-6.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 50px">
        <div class="col-md-4 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-12.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-xs-6 col-sm-6">
          <div class="blog-entry">
            <div class="blog-img">
              <a href="#">
                <img src="../assets/blog-13.jpg" class="img-responsive" alt="">
              </a>
            </div>
            <div class="desc">
              <p class="meta">
                <span class="cat"><a href="#">Events</a></span>
                <span class="date">20 March 2018</span>
                <span class="pos">By <a href="#">Rich</a></span>
              </p>
              <h2><a href="#">Recipe for your site</a></h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            navImg: [{
              url: require('../assets/blog-1.jpg'),
              value:'0'
            },{
              url: require('../assets/blog-2.jpg'),
              value:'1'
            },{
              url: require('../assets/blog-3.jpg'),
              value:'2'
            },{
              url: require('../assets/blog-4.jpg'),
              value:'3'
            },{
              url: require('../assets/blog-5.jpg'),
              value:'4'
            }]
          }
        }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
