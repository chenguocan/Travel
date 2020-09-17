<template>
  <div class="header">
    <div class="header-left">
      <div class="city">
        <span>城市</span>
        <div class="iconfont">&#xe731;</div>
      </div>
    </div>
    <div class="header-input">
      <div class="iconfont">&#xe616;</div>
      <input type="text" placeholder="搜索旅游地/酒店/景点" />
    </div>
    <div class="header-right">
      <div class="iconfont foot"> &#xe600;</div>
    </div>
  </div>
</template>

<script lang="js">
export default {
name: "Header"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variable.scss";
@import "~@/assets/iconfont.css";
.header {
  height: 7vh;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-family: $font-hei;
  align-items: center;
  background: deepskyblue;
  .header-left {
    color:white;
    .city{
      display: flex;
      justify-content: center;
      align-items: center;
      padding:0 15px 0 10px;
    }
  }
  .header-input{
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    input {
      font-size: 16px;
      width: 100%;
      height: 5vh;
      padding: 5px;
      background: white;
    }
  }
  .header-right{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(119,123,129);
    .foot{
      color:white;
    }
  }
}
</style>