<template>
  <section>
    <div class="container-md container-fluid text-topic">
      <div class="mb-10 pt-17">
        <h3 class="align-center">購物車清單確認</h3>
        <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
      </div>
      <!-- 購物車為空 -->
      <div class="mb-16" v-if="carData.length == 0">
        <div class="cartzero mb-10 pl-15 d-flex align-items-center">
          <div class="cartzero-bg d-flex flex-column align-items-center p-5">
            <p to="/products" class="h3 font-weight-bolder text-topic pb-10">你的購物車是空的~</p>
            <router-link to="/products" class="btn h3 w-100 btn-topic py-4 mb-3">前往商品列表</router-link>
          </div>
        </div>
      </div>
      <!-- 購物清單 -->
      <div class="table-responsive">
        <table class="table mb-0" v-if="carData.length > 0">
          <thead>
            <tr>
              <th scope="col" style="min-width:60px" class="d-md-table-cell d-none">圖片</th>
              <th scope="col" class="pl-6 pr-0">品項</th>
              <th scope="col" style="min-width:60px;" class="d-md-table-cell d-none">原價</th>
              <th scope="col" style="width:80px;" class="d-sm-table-cell d-none">數量</th>
              <th scope="col" style="min-width:60px;">特價</th>
              <th scope="col" style="min-width:80px;" class="d-sm-table-cell d-none pl-7">總計</th>
              <th scope="col" style="min-width:40px;">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carData" :key="item.product_id">
              <td class="d-md-table-cell d-none">
                <router-link :to="{ name: 'ProductDetail', params: { id: item.product_id }}" style="height: 60px; background-size: cover; background-position: center;"
                :style="{ backgroundImage: `url(${item.imageUrl})`}">
                </router-link>
              </td>
              <td class="text-secondary pl-6 pr-0">
                <router-link :to="{ name: 'ProductDetail', params: { id: item.product_id }}" class="text-topic">{{ item.title }}</router-link>
                <div class="btn-group mt-5 mt-sm-0 d-flex d-sm-none">
                  <button class="btn btn-warning" :class="{'pageDisabled': item.qty <= 1}" @click='onMinus(item)' style="width:36px"> - </button>
                  <input type="number" :value="item.qty" min="1" max="10" disabled class="text-center pl-2">
                  <button class="btn btn-warning" @click="onPlus(item)" style="width:36px"> + </button>
                </div>
              </td>
              <td class="text-secondary d-md-table-cell d-none">{{ item.origin_price | currency }}</td>
              <td class="text-secondary d-sm-table-cell d-none">
                <div class="btn-group d-none d-sm-flex">
                  <button class="btn btn-warning" :class="{'pageDisabled': item.qty <= 1}" @click='onMinus(item)' style="width:36px"> - </button>
                  <input type="number" :value="item.qty" min="1" max="10" disabled class="text-center pl-2">
                  <button class="btn btn-warning" @click="onPlus(item)" style="width:36px"> + </button>
                </div>
              </td>
              <td class="text-secondary">{{ item.price | currency }}</td>
              <td class="text-secondary d-sm-table-cell d-none pl-7">
                <div class="text-muted" v-if="item.price">
                  <span>{{ item.qty * item.price | currency }}</span>
                </div>
              </td>
              <td class="text-secondary">
                <button type="button" class="btn btn-outline-danger btn-sm" @click="delLocalCart(item)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul class="d-flex justify-content-end" v-if="carData.length > 0">
        <li class="text-topic text-right font-weight-bolder pr-6">共 <span class="h4 font-weight-bolder">{{ carData.length }}</span> 樣品項</li>
        <li colspan="2" class="text-topic text-right font-weight-bolder">
          商品小計 <span class="h4 font-weight-bolder">{{ totalPrice | currency }}</span>
        </li>
      </ul>
      <!-- 清空購物車 & 結帳去 -->
      <div class="mt-7 d-flex justify-content-end mb-15" v-if="carData.length > 0">
        <button @click="deleteLocalStorage" type="button" class="btn btn-outline-secondary font-weight-bolder py-4 px-7 mr-7">清空購物車</button>
        <button @click="postCarts" type="button" class="btn btn-warning font-weight-bolder py-4 px-7">
          結帳去
        </button>
      </div>
      <!--- 訂購需知 --->
      <section class="mb-12">
        <div class="mb-10">
          <h3 class="align-center">訂購需知</h3>
          <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
        </div>
        <ul class="h5 text-secondary">
          <li class="mb-6">
            <p class="text-topic mb-3">【發票開立】</p>
            <p class="cart-mark pl-14"> 我們會於付款後以Email方式寄送電子發票。</p>
            <p class="cart-mark pl-14"> 請於三日後至Email信箱內查收您的電子發票，若無收到，可能要檢查垃圾信箱。</p>
          </li>
          <li class="mb-6">
            <p class="text-topic mb-3">【產品配備】</p>
            <p class="cart-mark pl-14"> 每顆蛋糕皆附贈蛋糕鏟一支，塑膠叉匙一組五份（顏色款式隨機出貨），提袋一個。</p>
          </li>
          <li class="mb-6">
            <p class="text-topic mb-3">【送貨需知】</p>
            <p class="cart-mark pl-14"> 請確認所填寫的資料是否正確，下單後未提供修改付款方式服務。</p>
            <p class="cart-mark pl-14"> 本店商品目前只供應台灣地區，只提供宅配到府。</p>
          </li>
          <li class="mb-6">
            <p class="text-topic mb-3">【退貨退款】</p>
            <p class="cart-mark pl-14"> 退貨-本商品為生鮮食物皆有保鮮期，售出一律不接受退還，也無產品鑑賞期。</p>
            <p class="cart-mark pl-14"> 退款-本商品售出一律不接受退貨退款，除非宅配業者出現重大損傷造成商品瑕疵。</p>
            <p class="cart-mark pl-14"> 商品將交由宅配人員完整回收後與宅配業者求償後退款。</p>
            <p class="cart-mark pl-14"> 食品類商品，不適用於七天鑑賞期。 </p>
          </li>
          <li class="mb-6">
            <p class="text-topic mb-3">【其他事項】</p>
            <p class="cart-mark pl-14"> 本店商品為統一會於付款後7個工作日內出貨(不含假日)。</p>
          </li>
          <li>
            <p class="text-topic mb-3">【聯絡客服】</p>
            <p class="cart-mark pl-14"> 歡迎與我們聯絡：</p>
            <p class="pl-14"> 客服電話：(07)8350-123 </p>
            <p class="pl-14"> 服務時間：週一至週五：AM 09:00~PM 17:00 </p>
          </li>
        </ul>
      </section>
      <!-- 切出完美的Cake ! -->
      <section class="mb-19">
        <div class="mb-10">
          <h3 class="align-center">切出完美的Cake</h3>
          <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
        </div>
        <div class="row">
          <div class="col-lg-8 col-12">
            <img src="../../assets/image/cutcake.png" alt="cutcake-step">
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      carData: JSON.parse(localStorage.getItem('carData')) || [],
      cart: {
        carts: []
      },
      cartLength: 0
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
      return price.reduce(function (total, e) {
        return total + e
      })
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
        vm.cartLength = vm.cart.carts.length
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
          }).then(() => {
            vm.$router.push('/checkout/order_create').catch((err) => { return err })
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
    onPlus (item) {
      const vm = this
      vm.carData.filter((filterItem) => {
        if (filterItem.product_id === item.product_id) {
          filterItem.qty = filterItem.qty + 1
        }
        localStorage.setItem('carData', JSON.stringify(vm.carData))
      })
    },
    onMinus (item) {
      const vm = this
      if (item.qty <= 1) { return }
      vm.carData.filter((filterItem) => {
        if (filterItem.product_id === item.product_id) {
          filterItem.qty = filterItem.qty - 1
        }
        localStorage.setItem('carData', JSON.stringify(vm.carData))
      })
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
    }
  },
  created () {
    const vm = this
    vm.getCarts()
  }
}
</script>
<style scoped>
.btn-group .btn {
  flex: 0 1 auto;
}
</style>
