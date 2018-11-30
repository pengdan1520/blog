<template>
  <div>
    <div class="header-home" style="height: 70px;">
      <nav class="navbar" role="navigation">
        <div class="col-xs-12 col-sm-6 col-md-8" >
          <div class="col-xs-10 text-right menu-1">
            <ul class="homeUl">
              <li class="active" v-for="item in listNav">
                <router-link tag="li" :to="item.url">
                  <a class="homeNavFont">{{item.name}}</a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <div class="footer">
        111
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: '',
      listNav:[{
        name: '首页',
        url: '/'
      },{
        name: '博客',
        url: '/blog'
      },{
        name: '留言',
        url: '/event'
      },{
        name: '旅游记录',
        url: '/travel'
      },{
        name: '我的简介',
        url: '/about'
      },{
        name: '推荐',
        url: '/contact'
      }]
    }
  }
}
</script>
<style>
.homeUl{
  display: inline-block;
  line-height: 57px;
}
.navBar{
  text-align: right;
}
.homeUl li{
  float: left;
  list-style: none;
  margin: 0px 15px;
}
input,button,a {
  outline:0 none !important; blr:expression(this.onFocus=this.blur());
}
.fontStyle{
  font-family: SansSerif;
}
.homeNavFont{
  font-size: 12px;
  color: #666666;
}
.clear {
  clear: both;
}
.homeTop{
  padding: 7em 0;
}
.blog-entry {
  z-index: 0;
  display: block;
  position: relative;
}
.blog-entry .blog-img {
  display: block;
  z-index: -1;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.blog-entry .blog-img img {
  width: 100%;
  position: relative;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.blog-entry .desc h2 a {
  color: #000;
  background-color: transparent;
  outline: none;
}
.blog-entry .desc h2 {
  font-weight: 700;
  font-size: 28px;
}
.blog-entry .desc {
  width: 90%;
  background: #fff;
  margin-top: -3em;
  z-index: 1;
  padding: 1em;
}
.blog-entry .desc .meta {
  text-transform: uppercase;
  font-size: 14px;
}
.blog-entry .desc .meta span {
  padding-right: 10px;
}
.blog-entry .desc .meta {
  text-transform: uppercase;
  font-size: 14px;
}
.blog-entry:hover .blog-img img, .blog-entry:focus .blog-img img {
  position: relative;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.footer{
  min-height: 100px;
  background: #3f3f3f;
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  position: relative;
  color:black;
  font-size:24px
}
a:hover{
  color:black;
  text-decoration: none;
}
a:active{
  color: black;
}
a:before{
  content: attr(text);
  position: absolute;
  z-index: 10;
  color:pink;
  -webkit-mask:linear-gradient(to left, red, transparent );
}
</style>
