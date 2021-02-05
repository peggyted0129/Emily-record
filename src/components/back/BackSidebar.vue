<template>
  <div class="bg-milk d-flex flex-column justify-content-between py-11" style="height:100vh">
    <div class="sidebar">
      <h1><router-link :to="{ name: 'Home' }" class="pl-9 mb-11">
            <span class="material-icons text-topic h1 mr-4">spa</span>
            <span class="navbar-font h1 text-topic align-center">Emily</span>
          </router-link>
      </h1>
      <ul class="sidebar-link">
        <li class="sidebar-title text-topic position-relative h4 mb-10 pl-9">管理員</li>
        <li class="sidebar-list position-relative">
          <router-link to="/admin/products" class="d-flex align-items-center py-4 pl-8">
            <span class="material-icons mr-5">
              insert_chart
            </span>
            <h2 class="h5 mb-0">產品列表</h2>
          </router-link>
        </li>
        <li class="sidebar-list">
          <router-link to="/admin/orders" class="d-flex align-items-center py-4 pl-8">
            <span class="material-icons mr-5">
              question_answer
            </span>
            <h2 class="h5 mb-0">訂單列表</h2>
          </router-link>
        </li>
        <li class="sidebar-list">
          <router-link to="/admin/coupon" class="d-flex align-items-center py-4 pl-8">
            <span class="material-icons mr-5">
              assignment
            </span>
            <h2 class="h5 mb-0">優惠券</h2>
          </router-link>
        </li>
      </ul>
      <ul class="sidebar-link">
        <li class="sidebar-title text-topic position-relative h4 mb-10 pl-9 mt-13">模擬訂單</li>
        <li class="sidebar-list">
          <router-link to="/backstage/shopping" class="d-flex align-items-center py-4 pl-8">
            <span class="material-icons mr-5">
              shopping_cart
            </span>
            <h2 class="h5 mb-0">模擬功能</h2>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-person d-flex pl-9">
      <img class="sidebar-pic mr-5" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week5/emilywang.jpeg" alt="backstage-pic">
      <div class="sidebar-mail">
        <h2 class="h6 font-weight-bolder mb-1">Emily Lu</h2>
        <a href="mailto:peggyted0129@gmail.com" class="text-secondary">peggyted0129@gmail.com</a>
      </div>
    </div>
  </div>
</template>
