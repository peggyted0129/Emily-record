<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <NavBar />
    <Alert />
    <router-view />
    <footer :class="{ 'position-fixed': footerfixed }" class="bg-warning footer">
      <div class="container-fluid container-md py-5">
        <ul class="footer-icon d-flex align-items-center justify-content-center">
          <li>
            <router-link to="/login" class="text-center mr-sm-10 mr-4">
              <span class="material-icons h1 align-bottom">integration_instructions</span>
            </router-link>
          </li>
          <li>
            <a class="text-center mr-sm-10 mr-4" href="https://github.com/peggyted0129/Emily-record" target="_blank">
              <i class="fab fa-github-square h1"></i>
            </a>
          </li>
          <li>
            <a class="text-center" href="mailto:peggyted0129@gmail.com" target="_blank">
              <span class="material-icons h1 align-bottom">local_post_office</span>
            </a>
          </li>
        </ul>
        <p class="text-topic text-center pt-2 mb-0">
          © 2021. 僅為作品用無商業用途
        </p>
      </div>
    </footer>
    <!-- 我的最愛 顯示LOGO -->
    <div class="favorite position-fixed">
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#favoriteModal">
        <span class="material-icons h2 pt-1">favorite</span>
        <span class="cart-badge badge position-absolute badge-pill badge-warning">
          {{ favorites.length }}
        </span>
      </button>
    </div>
    <!-- scroll-top -->
    <div class="scroll-top position-fixed">
      <a href="#" @click.prevent="scrollToTop" class="scroll-up h2 d-flex justify-content-center align-items-center">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="favoriteModal" tabindex="-1" role="dialog" aria-labelledby="favoriteModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-0 pb-0 px-3 px-sm-8 d-flex align-items-center">
            <h4 class="modal-title text-topic font-weight-bold" id="favoriteModalCenterTitle">
              願望清單
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body px-3 pb-3 px-sm-8">
            <table class="table mb-3">
              <thead>
                <tr class="text-topic" v-if="favorites.length > 0">
                  <th scope="col" class="text-center py-3" width="40"></th>
                  <th scope="col" class="text-center" width="40"></th>
                  <th scope="col" class="py-3 pl-1 pl-sm-5 px-0">商品</th>
                   <th scope="col" class="py-3 d-none d-sm-table-cell" width="60">數量</th>
                  <th scope="col" class="py-3 pl-0">特價</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in favorites" :key="item.id">
                  <th class="text-center pr-2 pl-0">
                    <div @click="removeFavoritesItem(item)" class="btn btn-outline-danger btn-sm p-0 border-0">
                      <span class="material-icons h2">delete_forever</span>
                    </div>
                  </th>
                  <th class="text-center p-0">
                    <div @click="addlocalCarts(item)" class="btn btn-outline-danger btn-sm p-0 border-0">
                      <span class="material-icons h2">
                        add_shopping_cart
                      </span>
                    </div>
                  </th>
                  <td class="text-topic font-weight-bolder pl-1 pr-0 pl-sm-5">{{ item.title }}</td>
                  <td class="text-left text-topic font-weight-bolder d-none d-sm-table-cell">1 {{ item.unit }}</td>
                  <td class="text-right text-topic font-weight-bolder pl-0">
                    {{ item.price }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="border-top">
              <div v-if="!favorites.length" class="py-7">
                <p class="text-center text-topic font-weight-bolder h5">
                  願望清單空空的哦!
                </p>
              </div>
              <button type="button" v-if="favorites.length > 0" @click="delFavoriteAll"
                      class="btn-block text-center btn btn-warning font-weight-bolder h5 py-3 mt-5">
                全部清除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/front/NavBar.vue'
import Alert from '@/components/AlertMessage.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    NavBar,
    Alert
  },
  data () {
    return {
      carData: JSON.parse(localStorage.getItem('carData')) || [],
      routerName: this.$route.name,
      footerfixed: false
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('productModules', ['products', 'favorites'])
  },
  methods: {
    ...mapActions('productModules', [
      'getProducts',
      'getFavorites',
      'removeFavoritesItem',
      'delFavoriteAll'
    ]),
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
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    ScrollHeight () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 300) {
        document.querySelector('.scroll-top').style.opacity = '1'
      } else {
        document.querySelector('.scroll-top').style.opacity = '0'
      }
    },
    footerFixed () {
      const vm = this
      const { routerName } = this
      switch (true) {
        case routerName === 'Login' || 'OrderPaid':
          vm.footerfixed = true
          break
        default:
          vm.footerfixed = false
          break
      }
    }
  },
  watch: {
    $route (to, from) {
      const vm = this
      if (to.path !== from.path) {
        vm.routerName = to.name
        vm.footerfixed = false
        vm.footerFixed()
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.ScrollHeight)
  },
  destroyed () {
    window.removeEventListener('scroll', this.ScrollHeight)
  },
  created () {
    const vm = this
    if (vm.routerName === 'Login') {
      vm.footerfixed = true
    } else if (vm.routerName === 'OrderPaid') {
      vm.footerfixed = true
    }
    vm.getFavorites()
  }
}
</script>
<style lang="scss" scope>
.table {
  min-width: 280px;
}
</style>
