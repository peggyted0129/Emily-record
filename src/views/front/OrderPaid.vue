<template>
  <section>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent p-0 mb-3">
        <li class="breadcrumb-item"><router-link class="text-topic" to="/cart">購物車列表</router-link></li>
        <li class="breadcrumb-item">建立訂單</li>
        <li class="breadcrumb-item">確認訂購資料</li>
        <li class="breadcrumb-item font-weight-bolder active" aria-current="page">付款完成</li>
      </ol>
    </nav>
    <ul class="finish d-flex flex-column justify-content-center align-items-center mt-10">
      <li class="mb-9"><i class="fas fa-truck"></i></li>
      <li class="mb-9"><h3 class="h2">恭喜您，已完成付款結帳囉 ！</h3></li>
      <li class="mb-9">
        <p class="h5">感謝您對 <strong>Emily Cake</strong> 的信任，商品將會在 1 - 3 天送到，請耐心等候。</p>
      </li>
      <li class="text-center w-100 mb-9">
        <router-link to="/products" class="btn btn-warning font-weight-bolder w-50">繼續購物</router-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      orderId: ''
    }
  },
  computed: {
    ...mapGetters(['isLoading', 'orderStep'])
  },
  methods: {
    ...mapActions(['setOrderStep'])
  },
  created () {
    const vm = this
    vm.setOrderStep('paid')
    vm.orderId = vm.$route.params.orderId
  }
}
</script>
