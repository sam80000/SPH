<template>
 <div>
    Search页面
    <span>params传值:{{ $route.params.searchKey }}===={{keyword}}</span>
    <span>query传值:{{ $route.query.k }}===={{query}}</span>
  </div>
</template>

<script>
export default {
  props: ['keyword', 'query']
}
</script>

<style>
</style>
