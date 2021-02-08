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
    <div class="finish-banner d-flex  align-items-center justify-content-center mb-12">
      <ul class="finish d-flex flex-column justify-content-center align-items-center p-13">
        <li class="mb-7"><i class="fas fa-truck"></i></li>
        <li class="mb-7"><h3 class="h2">交易成功 ！</h3></li>
        <li class="mb-7">
          <p class="h5">感謝您的訂購，歡迎再度光臨選購。</p>
        </li>
        <li class="text-center w-100">
          <router-link to="/products" class="btn btn-warning font-weight-bolder w-75">繼續購物</router-link>
        </li>
      </ul>
    </div>
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
