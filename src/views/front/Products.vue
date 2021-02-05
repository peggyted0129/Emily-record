<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-3 mt-md-16 mt-15">
          <!-- 搜尋框 -->
          <div class="input-group mb-6">
            <input class="form-control" type="text" v-model="searchText" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-topic" type="button" @click="searchText = ''">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <!-- 產品列表 -->
          <ul class="list-group text-center mb-10">
            <li><a href="#" @click.prevent="searchText = ''" :class="{ 'active': searchText === ''}" class="list-group-item list-group-item-action h5">所有商品</a></li>
            <li>
              <a href="#" @click.prevent="searchText = item" :class="{ 'active': item === searchText}"
              v-for="item in categories" :key="item" class="list-group-item list-group-item-action h5">{{ item }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-9 mt-md-16 mt-0 mb-19">
          <div class="row">
            <div class="col-lg-4 col-sm-6" v-for="product in filterData" :key="product.id" data-aos="fade-up">
              <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}" class="product-card card border-0 mb-6">
                <div class="card-img-top card-img position-relative" style="height:200px">
                  <img class="card-img-top card-img h-100 w-100" :src="product.imageUrl" alt="Card-image">
                  <p class="list-hover h4 font-weight-bolder d-flex align-items-center justify-content-center">點擊查看更多</p>
                </div>
                <div class="card-body p-4">
                  <p class="badge badge-secondary mb-2">
                    {{ product.category }}
                  </p>
                  <h3 class="card-title h5 text-topic mb-4">{{ product.title }}</h3>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5 text-danger" v-if="!product.price">{{ product.origin_price }} 元</div>
                    <del class="h6 text-topic" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                    <div class="h5 text-danger" v-if="product.price">特價 {{ product.price }} 元</div>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center pt-0 border-top-0 bg-white p-7 mb-3">
                  <!-- 加入購物車 -->
                  <a href="#" class="icon-cart text-danger" @click.prevent="addlocalCarts(product)">
                    <i class="fa fa-cart-plus fa-2x"></i>
                  </a>
                  <!-- 加入最愛 -->
                  <button class="icon-love btn text-danger" @click="addToFavorites(product)" type="button"
                   v-if="!favorites.map((item) => item.id).includes(product.id)">
                    <i class="far fa-heart fa-2x"></i>
                  </button>
                  <!-- 移除最愛 -->
                  <button class="icon-love btn text-danger" @click="removeFavoritesItem(product)" type="button"
                   v-if="favorites.map((item) => item.id).includes(product.id)">
                    <i class="fas fa-heart fa-2x"></i>
                  </button>
                </div>
              </router-link>
            </div>
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
      searchText: '',
      carData: JSON.parse(localStorage.getItem('carData')) || []
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('productModules', ['products', 'categories', 'favorites']),
    filterData () {
      const vm = this
      if (vm.searchText) {
        return vm.products.filter((item) => {
          const data = item.category.toLowerCase().includes(vm.searchText.toLowerCase())
          return data
        })
      }
      return vm.products
    }
  },
  methods: {
    ...mapActions('productModules', ['getProducts', 'getFavorites', 'addToFavorites', 'removeFavoritesItem']),
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
    vm.getProducts()
  }
}
</script>
