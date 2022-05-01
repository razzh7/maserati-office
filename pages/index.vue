<template>
  <div class="flex text-blue-450 h-70 md:h-75 lg:h-90 bg-white relative">
    <!-- w-224 2xl:w-276 w-144 md:w-220 lg:w-244 -->
    <div class="h-full absolute top-0 left-0
      w-224 2xl:w-276 w-144 md:w-220 lg:w-244
      px-20 md:px-45 lg:px-60">
      <a href="https://www.maserati.com/cn/zh">
        <img class="w-104 lg:w-124 h-full" src="~/assets/img/maserati_logo_original.svg">
      </a>
    </div>
    <!-- w-5/6 -->
    <div class="left flex absolute top-0 left-56 h-full items-center sm:hidden">
      <!-- <div class="sm:hidden"> -->
        <div class="mx-2">品牌</div>
        <div class="mx-2">车型</div>
        <div class="mx-2">新闻</div>
        <div class="mx-2">服务&售后支持</div>
        <div class="mx-2">工具&服务</div>
      <!-- </div> -->
    </div>
    <!-- w-1/6 -->
    <div class="absolute top-0 right-0 flex h-full text-sm sm:hidden">
      <div class="r-item w-2/6 bg-navright h-full flex items-center justify-center">经销商查询</div>
      <div class="r-item w-2/6 bg-navtry text-white h-full flex items-center justify-center">试驾</div>
      <div class="r-item w-2/6 bg-navright h-full flex items-center justify-center">搜索</div>
    </div>
    <div class="absolute top-0 right-0 w-20 h-full md:hidden lg:hidden sm:block">
      <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    heihei
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    .line {
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: #333;
    }
    .line:nth-child(2) {
      margin: 5px 0;
    }

  }
</style>>
