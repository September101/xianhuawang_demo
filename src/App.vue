<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <hello></hello> -->
    <!-- 底部分页菜单 -->
    <footer class="footer">
      <ul>
        <li class="homeli">
          <router-link to="/home">
              <span><img src="./pages/imgs/home_icon_click_new.png"></span>
              <p>首页</p>
          </router-link>
        </li>
        <li class="sortli">
          <router-link to="/sort">
              <span><img src="./pages/imgs/classify_icon_new.png"></span>
              <p>分类</p>
          </router-link>
        </li>
        <li class="cartli">
          <router-link to="/cart">
              <span><img src="./pages/imgs/cart_icon_new.png"></span>
              <p>购物车</p>
          </router-link>
        </li>
        <li class="mineli">
          <router-link to="/mine">
              <span><img src="./pages/imgs/my_icon_new.png"></span>
              <p>我的</p>
          </router-link>
        </li>
      <router-view></router-view>
      </ul>
    </footer>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>

/* 页面样式 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* footer样式 */
.footer{
    width: 100%;
    height: 0.51rem;
    background-color: rgba(250,250,250,1);
    border-top: 1px solid #ddd;
    position: fixed;
    left: 0;
    bottom: 0;
}
.footer ul{
    width: 100%;
    height: 0.51rem;
    display: flex;
}
.footer ul li{
    width: 25%;
    height: 0.51rem;
    flex: 1;
    float: left;
    text-align: center;
}
.footer li a {
    color: #494949;
}
.footer li span{
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    margin: 0.04rem auto 0.02rem auto;
}
.footer li span img{
    width: 100%;
    height: 100%;
}
.footer li:nth-child(1) p{
    color: #fe6600;
}
.footer li p{
    font-size: 0.12rem;
    text-align: center;
    width: 100%;
    height: 0.20rem;
    line-height: 0.20rem;
    margin-bottom: 0.03rem;
}
</style>
