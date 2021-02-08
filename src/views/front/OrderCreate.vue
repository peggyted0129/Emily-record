<template>
  <section>
    <!-- 麵包屑導覽 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent px-0 mb-7">
        <li class="breadcrumb-item">
          <router-link class="text-topic" to="/cart">購物車列表</router-link>
        </li>
        <li class="breadcrumb-item font-weight-bolder active" aria-current="page">建立訂單</li>
      </ol>
    </nav>
    <div class="row mb-19">
      <!-- 訂單說明 -->
      <div class="col-md-5 mb-6">
        <div class="card border mb-4">
          <h5 class="card-header">訂單明細</h5>
          <div class="card-body px-sm-5 px-3">
            <div class="d-flex align-items-center font-weight-bolder mb-4" v-for="item in cart.carts" :key="item.id">
              <img :src="item.product.imageUrl" class="mr-xl-12 mr-md-4 mr-sm-10 mr-5" alt="cart-pic" style="width:70px;height:70px">
              <div class="d-flex flex-lg-row justify-content-lg-between flex-md-column flex-sm-row flex-column w-100">
                <p>{{ item.product.title }} x {{ item.qty }}</p>
                <p class="ml-lg-auto ml-md-0 ml-sm-10">${{ item.total }}元</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card border">
          <h5 class="card-header">訂單金額</h5>
          <div class="card-body">
            <div class="d-flex mb-4">
              <h5 class="card-title mr-auto">商品數量</h5>
              <p class="card-text h5" v-if="cartLength > 0">{{ cartLength }} 件</p>
            </div>
            <!-- 原價金額 -->
            <div class="d-flex mb-md-10 mb-0" v-if="cart.total === cart.final_total">
              <h5 class="card-title mr-auto">金額總計</h5>
              <p class="card-text text-danger h5 font-weight-bolder">
                {{ cart.total | currency }} 元
              </p>
            </div>
            <!-- 折扣金額 -->
            <div class="text-success" v-if="cart.coupon">已套用優惠券</div>
            <div class="d-flex mb-md-5 mb-0" v-if="cart.total !== cart.final_total">
              <h5 class="card-title mr-auto">金額總計</h5>
              <p class="card-text text-danger h5 font-weight-bolder">{{ cart.total | currency }} 元</p>
            </div>
            <div class="d-flex" v-if="cart.total !== cart.final_total">
              <p class="card-text ml-auto text-secondary h6">( 折扣 {{ cart.total - cart.final_total | currency }} 元 )</p>
            </div>
            <div class="d-flex mb-10" v-if="cart.total !== cart.final_total">
              <h5 class="card-title mr-auto h5">折扣後總計</h5>
              <p class="card-text text-danger h5 font-weight-bolder">{{ cart.final_total | currency }} 元</p>
            </div>
            <!-- 使用優惠碼 -->
            <div class="input-group mt-5 mb-5">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" style="height:50px">
              <div class="input-group-append">
                <button class="btn btn-warning font-weight-bolder py-4 px-lg-7 px-md-1" type="button" @click="addCouponCode">使用優惠碼</button>
              </div>
            </div>
            <!-- 使用優惠碼消息 -->
            <div class="alert alert-warning" role="alert">
              結帳時輸入優惠券代碼「 HappyCoupon 」，即可享 8 折優惠！
            </div>
            <!-- 商品配送需知 -->
            <ul>
              <li class="font-weight-bolder lh-lg">[ 商品配送需知 ]</li>
              <li class="text-secondary d-flex">
                <span class="mr-3">★</span>
                <p>
                  每個6吋乳酪蛋糕皆有附提袋x1、直立蠟燭x1、含刀的6入叉盤x1，若有不需要附贈的部分請備註告知。
                </p>
              </li>
              <li class="text-secondary d-flex">
                <span class="mr-3">★</span>
                <p>
                  包裹內【不會有訂單明細、出貨單等資訊】，僅會附上DM參考，若有送禮需求顧慮也可以在訂單備註不用DM。
                </p>
              </li>
              <li class="text-secondary d-flex mb-6">
                <span class="mr-3">★</span>
                <p>
                  若有要寄送【不同地址請分別下單】，目前無提供拆單寄送服務。
                </p>
              </li>
              <li class="font-weight-bolder lh-lg">[ 退換貨資訊 ]</li>
              <li class="text-secondary d-flex">
                <span class="mr-3">★</span>
                <p>
                  蛋糕皆為接單製作生產，如果按下【送出訂單】，即無法取消或退款。如有其他不可抗之因素，請致電客服詢問。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 顧客資料 (驗證功能) -->
      <div class="col-md-7">
        <div class="card border mb-5">
          <h5 class="card-header">顧客資料</h5>
          <div class="card-body">
            <Validation-observer v-slot="{ invalid }">
              <form @submit.prevent="createOrder">
                <div class="form-row">
                  <div class="col-md-6 mb-5">
                    <validation-provider rules="required|email" v-slot="{ errors, classes }">
                      <label for="email">Email</label><span class="ml-2 text-danger">*</span>
                      <input
                        name="Email"
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="form.user.email"
                        :class="classes"
                        placeholder="請輸入Email"
                      />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="col-md-6 mb-5">
                    <validation-provider rules="required" v-slot="{ errors, classes }">
                      <label for="name">收件人姓名</label><span class="ml-2 text-danger">*</span>
                      <input
                        name="收件人姓名"
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="form.user.name"
                        :class="classes"
                        placeholder="請輸入姓名"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                </div>
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <div class="form-group">
                    <label for="telphone">收件人電話</label><span class="ml-2 text-danger">*</span>
                    <input
                      name="電話"
                      type="tel"
                      class="form-control"
                      id="telphone"
                      v-model="form.user.tel"
                      :class="classes"
                      placeholder="請輸入電話"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <div class="form-group">
                    <label for="address">收件人地址</label><span class="ml-2 text-danger">*</span>
                    <input
                      name="收件人地址"
                      type="address"
                      class="form-control"
                      id="address"
                      v-model="form.user.address"
                      :class="classes"
                      placeholder="請輸入地址"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>
                <div class="form-group">
                  <label for="usertext">留言</label>
                  <textarea
                    name=""
                    id="usertext"
                    class="form-control"
                    cols="20"
                    rows="10"
                    v-model="form.message"
                    placeholder="有什麼話想告訴店家的嗎 ?"
                  ></textarea>
                </div>
                <div class="d-flex">
                  <button :disabled="invalid" class="btn btn-warning w-50 ml-auto" type="submit">
                    送出訂單
                  </button>
                </div>
              </form>
            </Validation-observer>
          </div>
        </div>
      </div>
      <!-- modal -->
      <div class="modal fade" id="leaveModal" tabindex="-1" role="dialog" aria-labelledby="leaveModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-warning">
              <h5 class="modal-title h3">Emily Shop</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body py-8 font-weight-bolder lh-lg h5">
              尚未結帳完成，請問是否確定離開此頁 ? 若離開此頁，
              <span class="text-danger">購物車商品將需重新選購 !</span>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-stay" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-warning btn-leave">確定離開</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* global $ */
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      goNext: false,
      coupon_code: '',
      cart: {
        carts: []
      },
      cartLength: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  computed: {
    ...mapGetters(['isLoading', 'orderStep'])
  },
  methods: {
    ...mapActions(['setOrderStep']),
    getCarts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$store.dispatch('updateLoading', true)
      vm.$http.get(api).then((res) => {
        vm.cart = res.data.data
        vm.cartLength = res.data.data.carts.length
        vm.$store.dispatch('updateLoading', false)
      })
    },
    addCouponCode () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code.trim()
      }
      vm.$store.dispatch('updateLoading', true)
      vm.$http.post(api, { data: coupon }).then((response) => {
        vm.$store.dispatch('alertModules/updateMessage', { message: `${response.data.message}`, status: 'info' })
        vm.$store.dispatch('updateLoading', false)
        vm.getCarts()
      })
    },
    createOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.$store.dispatch('updateLoading', true)
      vm.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.goNext = true
          vm.$router.push(`/checkout/order_paying/${response.data.orderId}`)
          vm.$store.dispatch('alertModules/updateMessage', {
            message: '訂單建立成功',
            status: 'info'
          })
        }
        vm.$store.dispatch('updateLoading', false)
      })
    }
  },
  created () {
    const vm = this
    vm.setOrderStep('create')
    vm.getCarts()
  },
  beforeRouteLeave (to, from, next) {
    const vm = this
    if (vm.goNext) {
      next()
    } else {
      $('#leaveModal').modal('show')
      $('.btn-stay').on('click', () => {
        $('#leaveModal').modal('hide')
        next(false)
      })
      $('.btn-leave').on('click', () => {
        $('#leaveModal').modal('hide')
        next()
      })
    }
  }
}
</script>
