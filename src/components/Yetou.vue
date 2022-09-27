<template>
  <div>
    <router-link to="/home">
      <img src="../assets/logo.png" class="logo">
    </router-link>
    <router-link to="/login">登陆页面</router-link>
    <router-link to="/register">注册信息</router-link>
    <div class="search">
      <input type="search" v-model="searchKey">
      <button @click="goSearch">搜索</button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      searchKey: ''
    }
  },
  methods: {
    // 搜索跳转传参
    goSearch () {
      // 跳转并传递参数-模板字符串传参
      this.$router.push(`/search/${this.searchKey}?k=${this.searchKey.toUpperCase()}`)
      // 对象传递
      // this.$router.push({name:'search',params:{searchKey:this.searchKey},query:{k:this.searchKey.toUpperCase()}})
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height: 3.125rem;
  background: gray;
}
.logo{
  width: 1.875rem;
  height: 1.875rem;
}
.search{
  display:inline
}
</style>
