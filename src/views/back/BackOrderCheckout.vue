<template>
  <section class="my-8 text-topic row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td class="align-middle">{{ item.product.title }}</td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-danger text-right font-weight-bolder">總計</td>
            <td class="text-danger text-right font-weight-bolder">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>
      <table class="table mb-0">
        <tbody>
          <tr>
            <th width="150">Email</th>
            <td class="pl-12">{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td class="pl-12">{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td class="pl-12">{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td class="pl-12">{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid" class="pl-11">尚未付款</span>
              <span v-else class="text-success pl-11">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right" v-if="order.is_paid === false">
        <button class="btn btn-danger" type="submit">確認付款去</button>
      </div>
    </form>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      orderId: ''
    }
  },
  computed: {
    ...mapGetters(['isLoading', 'order'])
  },
  methods: {
    getOrder () {
      this.$store.dispatch('getOrder', this.orderId)
    },
    payOrder () {
      this.$store.dispatch('payOrder', this.orderId)
    }
  },
  created () {
    const vm = this
    vm.orderId = vm.$route.params.orderId
    vm.getOrder()
  }
}
</script>
