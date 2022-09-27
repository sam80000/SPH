<template>
  <div>
    <yetou></yetou>
    这是app根组件
    <router-view></router-view>
    <yewei v-show="$route.meta.show"></yewei>
  </div>
</template>

<script>
import Yetou from './components/Yetou.vue'
import Yewei from './components/Yewei.vue'
export default {
  components: {
    Yetou,
    Yewei
  }
}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
