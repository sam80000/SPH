<template>
  <div>
    typenav页面
    <ul>
      <li v-for="(ci,index) in categoryList" :key="ci.hotnum" @mouseenter="changecolor(index)" @mouseleave="clearcolor" :class="{cur:currentIndex==index}">{{ci.title}}</li>
    </ul>
  </div>
</template>

<script>
// 引入辅助函数
import { mapState } from 'vuex'
// 引入lodash
import throttle from 'lodash/throttle'
export default {
  data () {
    return {
      currentIndex: -1 // 记录列表下标
    }
  },
  // 组件挂载完毕，向服务器发请求
  mounted () {
    // 通知vuex发请求，获取数据，存储到仓库
    this.$store.dispatch('categoryList')
  },
  methods: {
    // 鼠标移动变色
    // changecolor(index){
    //   this.currentIndex = index
    // },
    changecolor: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    clearcolor () {
      this.currentIndex = -1
    }
  },
  computed: {
    ...mapState({
      // 获取state
      categoryList: state => state.home.categoryList.newslist

    })
  }
}
</script>

<style lang="scss" scoped>
.cur{
  background: skyblue;
}
</style>
