<template>
  <section>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent px-0 mb-7">
        <li class="breadcrumb-item">購物車列表</li>
        <li class="breadcrumb-item">建立訂單</li>
        <li class="breadcrumb-item font-weight-bolder active" aria-current="page">確認訂購資料</li>
      </ol>
    </nav>
    <div class="row mb-19">
      <div class="col-md-5 mb-5">
        <div class="card border">
          <h5 class="card-header">訂單明細</h5>
          <div class="card-body font-weight-bolder">
            <div class="d-flex mb-4">
              <h6 class="card-title mr-auto">單號</h6>
              <p class="card-text h6">{{ order.id }}</p>
            </div>
            <div class="d-flex mb-4">
              <h6 class="card-title mr-auto">內容</h6>
              <ul>
                <li v-for="item in order.products" :key="item.id">
                  {{ item.product.title }} * {{ item.qty }}{{ item.product.unit }}
                </li>
              </ul>
            </div>
            <div class="d-flex mb-5">
              <h6 class="card-title mr-auto">結帳金額</h6>
              <p class="card-text text-danger h6 font-weight-bolder">
                {{ order.total | currency }} 元
              </p>
            </div>
          </div>
          <div class="card-footer p-5 bg-white d-flex align-items-center" v-for="item in order.products" :key="item.id">
            <div style="background-size: cover; background-position: center;"
            :style="{backgroundImage: `url(${item.product.imageUrl})`}" class="order-pic"></div>
            <h6 class="card-title ml-auto">{{ item.product.title }}</h6>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="card border mb-10">
          <h5 class="card-header">顧客資料</h5>
          <div class="card-body">
            <div class="d-flex mb-4">
              <h6 class="card-title mr-auto">Email</h6>
              <p class="card-text h6">{{ order.user.email }}</p>
            </div>
            <div class="d-flex mb-4">
              <h6 class="card-title mr-auto">姓名</h6>
              <p class="card-text h6">{{ order.user.name }}</p>
            </div>
            <div class="d-flex mb-4">
              <h6 class="card-title mr-auto">收件人電話</h6>
              <p class="card-text h6">{{ order.user.tel }}</p>
            </div>
            <div class="d-flex mb-4">
              <h6 class="card-title mr-auto">收件人地址</h6>
              <p class="card-text h6">{{ order.user.address }}</p>
            </div>
            <div class="d-flex mb-4">
              <h6 class="card-title mr-auto">付款狀態</h6>
              <span class="text-danger font-weight-bolder pl-12">
                尚未付款
              </span>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button @click="payOrder(orderId)" class="btn btn-warning font-weight-bolder w-50" type="button">
            確認付款
          </button>
        </div>
      </div>
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
    ...mapGetters(['isLoading', 'orderStep', 'order'])
  },
  methods: {
    ...mapActions(['setOrderStep']),
    getOrder () {
      this.$store.dispatch('getOrder', this.orderId)
    },
    payOrder () {
      this.$store.dispatch('payOrder', this.orderId).then(() => {
        this.$router.push(`/checkout/order_paid/${this.orderId}`)
      })
    }
  },
  created () {
    const vm = this
    vm.setOrderStep('paying')
    vm.orderId = vm.$route.params.orderId
    vm.getOrder()
  }
}
</script>
