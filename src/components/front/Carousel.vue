<template>
  <div>
    <!-- 輪播內容 -->
    <div class="carousel mt-10">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <swiper :options="swiperOptionProducts" ref="mySwiper" v-if="products.length>1">
            <ul class="swiper-slide" v-for="product in products" :key="product.id">
              <li class="card w-100 border-0">
                <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }"
                class="card-body position-relative border shadow radius-m text-topic p-0">
                  <div style="height:230px">
                    <img class="card-img h-100 w-100" :src="product.imageUrl" alt="product-pic">
                  </div>
                  <h5 class="card-title carousel-title font-weight-bolder my-6">{{ product.title }}</h5>
                  <div class="d-flex justify-content-center align-items-center mb-3">
                    <p class="badge badge-secondary mr-2">{{ product.category }}</p>
                    <div>
                      <span class="material-icons h5 align-middle text-topic">grade</span>
                      <span class="material-icons h5 align-middle text-topic">grade</span>
                      <span class="material-icons h5 align-middle text-topic">grade</span>
                      <span class="material-icons h5 align-middle text-topic">grade</span>
                      <span class="material-icons h5 align-middle text-topic">grade</span>
                    </div>
                  </div>
                  <p class="card-text h5 font-weight-bolder pb-15">特價 {{ product.price }} 元</p>
                  <!-- 加入購物車 -->
                  <div class="swiper-cart d-flex justify-content-center my-8 bg-white position-absolute">
                    <a href="#" class="btn btn-warning text-topic"
                    @click.prevent="addlocalCarts(product)">
                      <div class="d-flex align-items-center">
                        <i class="fa fa-cart-plus fa-2x mr-4"></i>
                        <span class="h5">加入購物車</span>
                      </div>
                    </a>
                  </div>
                </router-link>
              </li>
            </ul>
          </swiper>
        </div>
      </div>
      <a href="#" class="swiper-pagination d-none" slot="pagination"></a>
      <a href="#" class="swiper-button-next material-icons" @click.prevent="next">play_circle_filled</a>
      <a href="#" class="swiper-button-prev material-icons" @click.prevent="prev">play_circle_filled</a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      carData: JSON.parse(localStorage.getItem('carData')) || [],
      swiperOptionProducts: {
        direction: 'horizontal',
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('productModules', ['products'])
  },
  methods: {
    ...mapActions('productModules', ['getProducts']),
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
    prev () {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next () {
      this.$refs.mySwiper.$swiper.slideNext()
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
