<template>
  <div>home页面
    <type-nav></type-nav>
    <list-continar></list-continar>
    <re-commed></re-commed>
    <rank></rank>
    <like></like>
    <flor></flor>
    <brand></brand>
  </div>
</template>

<script>
import ListContinar from '@/views/Home/ListContinar'
import ReCommed from '@/views/Home/ReCommed'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Flor from '@/views/Home/Flor'
import Brand from '@/views/Home/Brand'

export default {
  components: {
    ListContinar,
    ReCommed,
    Rank,
    Like,
    Flor,
    Brand
  }
}
</script>

<style>

</style>
