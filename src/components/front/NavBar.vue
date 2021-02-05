<template>
  <header :class="{ 'navbar-scroll': isMenuOpen || scrollHeader }"
  class="navbar navbar-expand-md navbar-light py-md-1 px-md-5 p-0">
    <div class="container-fluid container-md">
      <h1 class="ml-5 ml-md-0">
        <router-link :to="{ name: 'Home' }" class="navbar-logo">Emily</router-link>
      </h1>
      <button class="navbar-toggler py-3 px-5" type="button"
      data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <div class="position-relative">
          <span class="toggler-bar toggler-bar-top"></span>
          <span class="toggler-bar toggler-bar-middle"></span>
          <span class="toggler-bar toggler-bar-bottom"></span>
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/products"
              class="nav-link d-flex align-items-center justify-content-center h5 text-center px-3 py-md-3 py-5"
              data-toggle="collapse" data-target=".navbar-collapse.show">
              <span class="material-icons d-md-inline-block d-none mr-1">receipt_long</span>
              <span>商品列表</span>
            </router-link>
          </li>
          <li class="nav-item ml-xl-9 ml-lg-5 ml-md-3">
            <router-link to="/cart"
              class="nav-link d-flex align-items-center justify-content-center h5 text-center px-3 py-md-3 py-5"
              data-toggle="collapse" data-target=".navbar-collapse.show">
              <span class="material-icons d-md-inline-block d-none mr-1">
                shopping_cart
              </span>
              <span>購物車</span>
            </router-link>
          </li>
          <li class="nav-item ml-xl-9 ml-lg-5 ml-md-3">
            <router-link to="/orders"
              class="nav-link d-flex align-items-center justify-content-center h5 text-center px-3 py-md-3 py-5"
              data-toggle="collapse" data-target=".navbar-collapse.show">
              <span class="material-icons d-md-inline-block d-none mr-1">thumb_up</span>
              <span>訂單</span>
            </router-link>
          </li>
          <li class="nav-item ml-xl-9 ml-lg-5 ml-md-3">
            <router-link to="/about"
              class="nav-link d-flex align-items-center justify-content-center h5 text-center px-3 py-md-3 py-5"
              data-toggle="collapse" data-target=".navbar-collapse.show">
              <span class="material-icons d-md-inline-block d-none mr-1">account_box</span>
              <span>關於我們</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
/* global $ */

export default {
  data () {
    return {
      barDropdown: false,
      scrollHeader: false,
      isMenuOpen: false,
      routerName: this.$route.name
    }
  },
  methods: {
    scrollPage () {
      const vm = this
      const scrollTop = $(window).scrollTop()
      const { routerName } = this
      switch (true) {
        case routerName === 'Home' && scrollTop > 0:
          window.addEventListener('scroll', vm.scrollPage)
          vm.scrollHeader = true
          break
        case routerName === 'Home':
          window.addEventListener('scroll', vm.scrollPage)
          vm.scrollHeader = false
          break
        default:
          window.removeEventListener('scroll', vm.scrollPage)
          vm.scrollHeader = true
          break
      }
    }
  },
  watch: {
    $route (to, from) {
      const vm = this
      if (to.path !== from.path) {
        vm.routerName = to.name
        vm.isMenuOpen = false
        vm.scrollPage()
      }
    }
  },
  created () {
    this.scrollPage()
  }
}
</script>
