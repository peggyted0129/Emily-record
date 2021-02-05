<template>
  <section class="my-6 text-topic">
    <div class="container-fluid">
      <!--- 商品卡片 --->
      <div class="row mt-9">
        <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
          <div class="card border-0 shadow-sm">
            <div style="height: 200px; background-size: cover; background-position: center;"
            :style="{backgroundImage: `url(${item.imageUrl})`}">
            </div>
            <div class="card-body" style="height: 136px">
              <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5 text-danger" v-if="item.price">特價 {{ item.price }} 元</div>
              </div>
            </div>
            <div class="card-footer d-flex">
              <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
                查看更多
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addlocalCarts(item)">
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 模擬購物車列表 & 套用優惠碼 & 訂單資料 -->
      <div class="my-5 row justify-content-center">
        <div class="my-5 col-7 mx-auto justify-content-center">
          <div class="h4 text-topic py-6 text-center mb-10" v-if="carData.length === 0">
            購物車尚無商品，歡迎繼續選購~
          </div>
          <!-- 模擬購物車列表 -->
          <table class="table" v-if="carData.length > 0">
            <thead>
              <th width="80"></th>
              <th width="200">品名</th>
              <th width="100">數量</th>
              <th width="50">特價</th>
              <th width="50">小計</th>
            </thead>
            <tbody v-for="item in carData" :key="item.product_id">
              <tr v-if="item.product_id">
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="delLocalCart(item)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">{{ item.title }}</td>
                <td class="align-middle">{{ item.qty }} {{ item.unit }}</td>
                <td class="align-middle text-right">{{ item.price }}</td>
                <td class="align-middle text-right">{{ item.price * item.qty }}</td>
              </tr>
            </tbody>
            <tfoot v-if="carData.length > 0">
              <tr>
                <td colspan="5" class="text-right">
                  購物車總計 <span class="h5">{{ totalPrice | currency }}</span> 元
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="mt-5 d-flex justify-content-end w-100 mb-12" v-if="carData.length > 0">
            <button @click="deleteLocalStorage" type="button" class="p-4 btn btn-warning font-weight-bolder mr-10">清空購物車</button>
            <button @click="postCarts" type="button" class="p-4 btn btn-warning font-weight-bolder">購物車內容確認</button>
          </div>
          <!-- 商品總計 -->
          <h5 class="mb-4">購物車訂單確認金額明細</h5>
          <ul v-if="cartLength > 0" class="d-flex mb-10">
            <li class="text-right mr-8" v-if="cart.carts">
              商品共 <span class="h5">{{ cartLength }}</span> 件
            </li>
            <li class="text-right mr-8">
              總金額為 <span class="h5">{{ cart.total | currency }}</span> 元
            </li>
          </ul>
          <!-- 套用優惠碼 -->
          <div class="input-group my-5 input-group-sm" v-if="cartLength > 0">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" style="height:46.8px">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
          <!-- 套用優惠券總計 -->
          <div v-if="cart.total !== cart.final_total" class="mb-10">
            <span>套用優惠券總計</span>
            <span class="h5">{{ cart.final_total | currency }}</span> 元
          </div>
          <!-- 訂單資料 (驗證功能) -->
          <Validation-observer v-slot="{ invalid }">
            <form class="px-0" @submit.prevent="createOrder">
              <validation-provider rules="required|email" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input name="Email" type="email" class="form-control" id="email" v-model="form.user.email"
                  :class="classes" placeholder="請輸入Email"/>
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="name">收件人姓名</label>
                  <input name="收件人姓名" type="text" class="form-control" id="name" v-model="form.user.name"
                  :class="classes" placeholder="請輸入姓名"/>
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="telphone">收件人電話</label>
                  <input name="電話" type="tel" class="form-control" id="telphone" v-model="form.user.tel"
                  :class="classes" placeholder="請輸入電話" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="address">收件人地址</label>
                  <input name="收件人地址" type="address" class="form-control" id="address" v-model="form.user.address"
                  :class="classes" placeholder="請輸入地址" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <div class="form-group">
                <label for="usertext">留言</label>
                <textarea name="" id="usertext" class="form-control" cols="30" rows="10"
                v-model="form.message"></textarea>
              </div>
              <div class="text-right">
                <button class="btn btn-danger" :disabled="invalid" type="submit">送出訂單</button>
              </div>
            </form>
          </Validation-observer>
        </div>
      </div>
    </div>
    <!--- 查看更多 modal --->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-center">
              <img :src="product.imageUrl" class="img-fluid" alt="product-pic" style="height: 250px; background-size: cover; background-position: center;">
            </div>
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-left">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" @click="addlocalCarts(product)">
              加到購物車
            </button>
          </div>
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
      coupon_code: '',
      carData: JSON.parse(localStorage.getItem('carData')) || [],
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
    ...mapGetters(['isLoading']),
    ...mapGetters('productModules', ['products', 'product']),
    totalPrice () {
      const vm = this
      const price = []
      vm.carData.forEach((item) => {
        price.push(parseInt(item.price * item.qty))
      })
      return price.reduce((total, e) => total + e)
    }
  },
  methods: {
    ...mapActions('productModules', ['getProducts', 'getProduct']),
    getCarts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$store.dispatch('updateLoading', true)
      vm.$http.get(api).then((res) => {
        vm.cart = res.data.data
        vm.cartLength = res.data.data.carts.length
        console.log('getCarts', res.data.data)
        vm.$store.dispatch('updateLoading', false)
      })
    },
    postCarts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cacheID = []
      vm.$store.dispatch('updateLoading', true)
      vm.$http.get(api).then((res) => {
        const cacheData = res.data.data.carts
        cacheData.forEach((item) => {
          cacheID.push(item.id)
        })
      }).then(() => {
        cacheID.forEach((item) => {
          vm.$http.delete(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item}`)
        })
      }).then(() => {
        vm.carData.forEach((item) => {
          const cache = {
            product_id: item.product_id,
            qty: item.qty
          }
          vm.$http.post(api, { data: cache }).then(() => {
            vm.carData = []
            localStorage.removeItem('carData')
            vm.$store.dispatch('updateLoading', false)
            vm.getCarts()
          })
        })
      })
    },
    delLocalCart (cart) {
      const vm = this
      vm.carData.filter((item, key) => {
        if (item.product_id === cart.product_id) {
          vm.carData.splice(key, 1)
          localStorage.setItem('carData', JSON.stringify(vm.carData))
          vm.$store.dispatch('alertModules/updateMessage', { message: '已移除購物車', status: 'danger' })
        }
      })
    },
    deleteLocalStorage () {
      localStorage.removeItem('carData')
      this.carData = JSON.parse(localStorage.getItem('carData')) || []
    },
    addlocalCarts (product, qty = 1) {
      const vm = this
      const cacheCarID = []
      vm.carData.forEach((item) => {
        cacheCarID.push(item.product_id)
      })
      vm.$store.dispatch('alertModules/updateMessage', { message: '已加入購物車', status: 'info' })
      if (cacheCarID.indexOf(product.id) === -1) {
        const cartContent = {
          product_id: product.id,
          qty: qty,
          title: product.title,
          imageUrl: product.imageUrl,
          unit: product.unit,
          origin_price: product.origin_price,
          price: product.price,
          category: product.category
        }
        vm.carData.push(cartContent)
        localStorage.setItem('carData', JSON.stringify(vm.carData))
      } else {
        let cache = {}
        vm.carData.forEach((item, key) => {
          if (item.product_id === product.id) {
            let { qty } = item
            cache = {
              product_id: product.id,
              qty: qty += 1,
              title: product.title,
              imageUrl: product.imageUrl,
              unit: product.unit,
              origin_price: product.origin_price,
              price: product.price,
              category: product.category
            }
            vm.carData.splice(key, 1)
          }
        })
        vm.carData.push(cache)
        localStorage.setItem('carData', JSON.stringify(vm.carData))
      }
    },
    addCouponCode () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code
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
          vm.$router.push(`/backstage/back_order_checkout/${response.data.orderId}`)
        }
        vm.$store.dispatch('updateLoading', false)
      })
    }
  },
  created () {
    const vm = this
    vm.getProducts()
    vm.getCarts()
  }
}
</script>
<style scoped>
.invalid-feedback {
   font-size: 100%;
}
</style>
