<template>
  <section class="pt-15 pt-md-16 text-topic">
    <div class="container">
      <div class="row mb-7">
        <div class="col-md-6" data-aos="fade-right" data-aos-duration="500" data-aos-once="ture">
          <!-- 麵包屑 -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/products" class="text-topic">所有商品</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
          <!-- 產品圖片 -->
          <img :src="product.imageUrl" class="carousel__item--active product-img img-fluid radius-m mb-4" alt="product-pic-lg">
          <div class="d-flex">
            <div class="carousel__inner" v-for="pic in filterPic" :key="pic.id">
              <a :href="pic.imageUrl" @click.prevent="changePic(pic.imageUrl)">
                <img :src="pic.imageUrl" class="radius-m" alt="filter-Pic">
              </a>
            </div>
          </div>
        </div>
        <!-- 產品內容 -->
        <div class="col-md-6 mt-10 mt-md-0" data-aos="fade-left" data-aos-duration="500" data-aos-once="ture">
          <ul class="text-topic pl-lg-10 pl-0">
            <li class="h3 mb-6">
              <span class="badge badge-theme p-4">{{ product.category }}</span>
            </li>
            <li class="d-flex align-items-center">
              <h4 class="product-title mr-md-10 mr-5"> {{ product.title }} </h4>
              <!-- 加入最愛 -->
              <button class="btn text-danger" @click="addToFavorites(product)" type="button"
               v-if="!favorites.map((item) => item.id).includes(product.id)">
                <i class="far fa-heart fa-2x"></i>
              </button>
              <!-- 移除最愛 -->
              <button class="btn text-danger" @click="removeFavoritesItem(product)" type="button"
               v-if="favorites.map((item) => item.id).includes(product.id)"  >
                <i class="fas fa-heart fa-2x"></i>
              </button>
            </li>
            <li>
              <img class="my-7" src="../../assets/image/divider.png" alt="title-button-line">
            </li>
            <li class="lh-lg mb-7"> [產品描述] <br> {{ product.description }} </li>
            <li class="lh-lg mb-7"> [產品保存方法 - 冷凍] <br>
              <p class="lh-lg">
                1. 冷凍保存較能鎖住水分，建議先切成每次品嚐的份量再置入冷凍庫。<br>
                2. 品嚐前，置入冷藏回溫一晚，隔日早上即可享用。<br>
                3. 從冷凍庫取出，於室溫放置10-15分，即可品嚐綿密的口感。
              </p>
            </li>
            <li class="lh-lg mb-md-12 mb-7"> [內容物] <br>
              <p class="lh-lg">精裝盒、緞帶、刀鏟、提袋、餐盤。</p>
            </li>
            <li class="d-flex justify-content-between mb-md-12 mb-7">
              <del class="h6 text-muted"> 原價{{ product.origin_price }} </del>
              <div class="h4 text-danger"> 特價{{ product.price }} </div>
            </li>
            <li class="d-flex justify-content-end align-items-center">
              <button type="button" class="product-button btn btn-warning p-4"
               @click="addlocalCarts(product)">
                <i class="fas fa-cart-plus fa-lg"></i>
                <span class="ml-5 h5">加到購物車</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- 相關產品 -->
      <section class="mb-md-13 mb-10">
        <div class="mb-10">
          <h2 class="align-center">類似產品</h2>
          <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
        </div>
        <div class="row mb-10" data-aos="fade-up" data-aos-duration="800" data-aos-once="ture">
          <div class="col-xl-3 col-md-4 col-sm-6 col-12 mb-5" v-for="item in filterSimilars" :key="item.id">
            <a href="#" @click.prevent="openSimilars(item.id)" class="card border-0 hover-scale mx-8 mx-sm-0">
              <div style="height: 170px; background-size: cover; background-position: center;"
              :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
              <div class="card-body" style="height: 140px">
                <p class="badge badge-secondary mb-3">{{ item.category }}</p>
                <h5 class="card-title text-topic font-weight-bolder">{{ item.title }}</h5>
                <div class="h5 text-danger" v-if="item.price">NT {{ item.price }} 元</div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <!-- 嚴選食材 -->
      <section class="mb-md-15 mb-10">
        <div class="mb-10">
          <h2 class="align-center">新鮮現做</h2>
          <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
        </div>
        <div class="banner-lemon row position-relative">
          <ul class="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-10 py-4 banner-lemon-text position-absolute">
            <li class="h4 font-weight-bolder text-center text-topic p-2 mb-5">你訂購</li>
            <li class="h4 font-weight-bolder text-center text-topic p-2 mb-5">我現做才新鮮</li>
            <li>
              <router-link to="/products" class="btn btn-topic font-weight-bolder btn-block">
                手刀訂購<span class="material-icons ml-5">shop</span>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
      <!-- 顧客好評 -->
      <section class="mb-md-15 mb-md-15 mb-10">
        <div class="mb-10">
          <h2 class="align-center">顧客好評</h2>
          <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
        </div>
        <ul class="row">
          <li class="col-lg-4 col-md-6 mb-6" data-aos="flip-right" data-aos-delay="500" data-aos-duration="1500" data-aos-offset="200px">
            <div class="media bg-milk p-4 message">
              <img src="../../assets/image/customer.png" class="customer-pic mr-4" alt="customer-pic">
              <div class="media-body">
                <h5 class="h4 mt-0 mb-3">在地嚮導</h5>
                <p>烘焙過的花生香脆順口，加入起司蛋糕口感更提升一層。
                  剛入口濃郁的起司香，配上香脆花生，讓人一口接一口停不下來，非常推薦喔~</p>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6 mb-6" data-aos="flip-right" data-aos-delay="700" data-aos-duration="1500" data-aos-offset="200px">
            <div class="media bg-milk p-4 message">
              <img src="../../assets/image/customer2.png" class="customer-pic mr-4" alt="customer-pic">
              <div class="media-body">
                <h5 class="h4 mt-0 mb-3">蔣<span class="material-icons h5 align-bottom text-topic">grade</span>偉</h5>
                <p>蛋糕一入口，就有濃郁的乳酪香，恰到好處的甜度卻不膩口。
                  奶酒和草莓此奇妙的組合意外的搭配，讓整個蛋糕的味道更成熟有深度，絕對能收服女朋友的心。</p>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6 mb-6" data-aos="flip-right" data-aos-delay="900" data-aos-duration="1500" data-aos-offset="200px">
            <div class="media bg-milk p-4 message">
              <img src="../../assets/image/customer1.png" class="customer-pic mr-4" alt="customer-pic">
              <div class="media-body">
                <h5 class="h4 mt-0 mb-3">林<span class="material-icons h5 align-bottom text-topic">grade</span>妤</h5>
                <p>將可可粉和巧克力脆餅融合，一次享用綿密與顆粒口感，超完美融合的黃金比例。
                   濃郁的豐富層次讓人意猶未盡，孩子和大人都吃的開心。</p>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6 mb-6" data-aos="flip-right" data-aos-delay="1100" data-aos-duration="1500" data-aos-offset="200px">
            <div class="media bg-milk p-4 message">
              <img src="../../assets/image/customer3.png" class="customer-pic mr-4" alt="customer-pic">
              <div class="media-body">
                <h5 class="h4 mt-0 mb-3">Roy</h5>
                <p>精緻又不失美味的起司蛋糕，奢侈就如同名字一樣。
                   簡單卻看的出來在細節上的用心，採用新鮮水果，配上自然熟成乳酪，每口都是驚訝!</p>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6 mb-6" data-aos="flip-right" data-aos-delay="1300" data-aos-duration="1500" data-aos-offset="200px">
            <div class="media bg-milk p-4 message">
              <img src="../../assets/image/customer4.png" class="customer-pic mr-4" alt="customer-pic">
              <div class="media-body">
                <h5 class="h4 mt-0 mb-3">部落客 Candy</h5>
                <p>蛋糕精美好吃、不甜膩、吃起來無負擔，好吃到噴淚。奢侈享受，藍莓很新鮮，每顆藍莓都有用心挑過很甜。小孩很喜歡，過了一個難忘的生日!</p>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6 mb-6" data-aos="flip-right" data-aos-delay="1500" data-aos-duration="1500" data-aos-offset="200px">
            <div class="media bg-milk p-4 message">
              <img src="../../assets/image/customer5.png" class="customer-pic mr-4" alt="customer-pic">
              <div class="media-body">
                <h5 class="h4 mt-0 mb-3">Lance</h5>
                <p>抹茶起司好吃!不會膩口，吃下去每口都是入口即化的綿密感，入喉後更是覺得幸福，可以自己吃完一個!!
                   實在太好吃了，期待草口味的。</p>
              </div>
            </div>
          </li>
        </ul>
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
      productId: ''
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('productModules', ['products', 'product', 'favorites']),
    filterSimilars () {
      const vm = this
      return vm.products.filter(item => (item.id !== vm.productId) && (item.category === vm.product.category) && (item.is_enabled))
    },
    filterPic () {
      const vm = this
      return vm.products.filter(item => (item.id === vm.productId) || (item.category === vm.product.category))
    }
  },
  methods: {
    ...mapActions('productModules', ['getProducts', 'getProduct', 'getFavorites',
      'addToFavorites', 'removeFavoritesItem']),
    openSimilars (SimilarsId) {
      const vm = this
      vm.$router.push(`/product/${SimilarsId}`)
      vm.getProduct(SimilarsId)
    },
    changePic (pic) {
      const el = document.querySelector('.carousel__item--active')
      el.setAttribute('src', pic)
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
    vm.productId = vm.$route.params.id
    vm.getProduct(vm.productId)
    vm.getFavorites()
    vm.getProducts()
  }
}
</script>
<style scope>
.breadcrumb-item.active {
  color: #000;
}
</style>
