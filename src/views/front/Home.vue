<template>
  <div>
    <div class="home-banner" style="height:100vh">
      <div class="container h-100 d-flex flex-column align-items-center justify-content-center">
        <ul class="home-banner-text home-banner-border px-md-10 px-4 py-4" data-aos="fade-up" data-aos-delay="800">
          <li class="text-center mb-5">
            <h2 class="home-banner-title text-center lh-1">乳酪 &nbsp;|&nbsp;  起司  &nbsp;|&nbsp;  蛋糕</h2>
          </li>
          <li class="text-natural h6 lh-1 mb-5">致，健康樂活的人們!<br>堅持對純手工製成、保留食材純淨原味的感動，<br>咬一口，入口即化~<br>每口都是幸福滋味!</li>
          <li class="h5 text-warning lh-1 text-right mb-5">訂閱電子報，立刻享八折優惠</li>
          <li class="text-since lh-1 mb-0 text-right">Since 2002</li>
        </ul>
        <div id="scrollDown" class="demo">
          <a href="#fairy"><span></span>Scroll</a>
        </div>
      </div>
    </div>
    <div id="fairy" style="height:68px"></div> <!-- 空行 -->
    <!-- 杯子蛋糕圖 -->
    <section class="mb-11 mb-md-13" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
      <div class="row no-gutters">
        <div class="col-md-5 offset-md-7 col-lg-6 offset-lg-6 col-xl-7 offset-xl-5 fairy-bg position-absolute"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-lg-6 col-xl-5">
              <div class="fairy-title d-flex flex-column justify-content-center">
                <div class="fairy-text py-10 py-md-0">
                  <h2 class="h4">童話蛋糕 X 夢幻吃的到 !</h2>
                  <p class="mt-9 h6 text-secondary lh-lg">
                    杯子蛋糕為剛好一人可獨享的甜品，<br>
                    杯子蛋糕更被稱為童話蛋糕，<br>
                    不僅杯中的蛋糕體可以做不同的口味，<br>
                    上層的奶油裝飾更可以天馬行空，<br>
                    不同的奶油花擠法、加入翻糖造型，<br>
                    就像是童話故事成了女孩們的夢幻回憶。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 吃蛋糕圖 -->
    <section class="mb-10" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
      <div class="row no-gutters">
        <div class="col-md-7 eat-bg position-absolute"></div>
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-md-6 offset-md-6 col-lg-5 offset-lg-7">
              <div class="fairy-title d-flex align-items-center justify-content-md-end justify-content-center">
                <div class="eat-text py-7 px-10 py-sm-10 px-sm-16 p-md-0">
                  <h2 class="h4">為浪漫做一點事 ~</h2>
                  <p class="mt-9 h6 text-secondary lh-lg pr-lg-13">
                    小朋友流口水，<br>
                    姐姐會尖叫，<br>
                    為浪漫做一點事，<br>
                    快點手刀訂購夢幻的甜點，<br>
                    一成不變的日子，需要些改變!<br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 嚴選牛乳 -->
    <section class="banner-cow mb-11 mb-md-13 d-md-block d-none">
      <div class="row position-relative h-100">
        <ul class="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-10 py-4 banner-cow-text position-absolute">
          <li class="h4 font-weight-bolder text-topic p-2 mb-sm-5 mb-0">• 歐洲進口乳酪</li>
          <li class="h4 font-weight-bolder text-topic p-2 mb-sm-5 mb-0">• 有機黃豆榖飼牛</li>
          <li class="h4 font-weight-bolder text-topic p-2">• 乳香醇厚、食感絕妙</li>
        </ul>
      </div>
    </section>
    <!-- 嚴選食材 -->
    <section class="container mb-md-13 mb-11">
      <div class="mb-10">
        <h2 class="align-center">嚴選食材</h2>
        <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
      </div>
      <div class="row no-gutters">
        <div class="col-md-4 mb-5">
          <div class="stuff">
            <img src="@/assets/image/cheese.png" alt="cheese">
          </div>
          <div class="stuff p-5">
            <div class="stuff-inner bg-milk p-5 d-flex flex-column justify-content-center">
              <h4 class="font-weight-bolder text-center mb-2">乳酪</h4>
              <p class="lh-lg">是一種未經熟成的歐洲進口軟質新鮮乳酪，帶有微甜的口感與豐富的奶香，質地如天鵝絨般的滑順。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-5 d-flex flex-md-column-reverse flex-column">
          <div class="stuff">
            <img src="@/assets/image/greentea.png" alt="greentea">
          </div>
          <div class="stuff p-5">
            <div class="stuff-inner bg-milk p-5 d-flex flex-column justify-content-center">
              <h4 class="font-weight-bolder text-center mb-2">抹茶粉</h4>
              <p class="lh-lg">手工石磨的小山園抹茶粉，清新的香味與強烈的澀味融合，相對表現出抹茶的苦澀，甜味適中。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="stuff">
            <img src="@/assets/image/cream.png" alt="cream">
          </div>
          <div class="stuff p-5">
            <div class="stuff-inner bg-milk p-5 d-flex flex-column justify-content-center">
              <h4 class="font-weight-bolder text-center mb-2">手工奶油</h4>
              <p class="lh-lg">來自布列塔尼經典手工製作的發酵奶油，完全依照傳統手作方式生產，耗時費力地產出口感細緻的經典奶油。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 輪播 -->
    <section class="container position-relative mb-md-13 mb-11">
      <div class="mb-10">
        <h2 class="align-center">口碑推薦</h2>
        <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
      </div>
      <Carousel />
    </section>
    <!-- 門市據點 -->
    <section class="container mb-11 mb-md-13">
      <div class="mb-10">
        <h2 class="align-center">門市據點</h2>
        <img class="mt-2" src="@/assets/image/line1.png" alt="title-bottom-line">
      </div>
      <div class="row justify-content-md-start justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-10 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div class="shop-pic">
            <img src="@/assets/image/shop.jpg" alt="shop-pic" style="width:100%;height:230px">
          </div>
          <ul class="text-topic p-7">
            <li class="mb-3"><h3 class="title-side position-relative">義享天地店 - 8F</h3></li>
            <li class="h6 text-secondary mb-3">『部分口味現貨供應』</li>
            <li class="h5 lh-lg mb-3"> 地址 : 高雄市新德路1號 <br>
              營業時間 : 10:30~22:00 <br>
              捷運站 : 凹子底站 <br>
            </li>
            <li><a class="shop-link" href="https://goo.gl/maps/FMZLWPmQFxJdy4p98" target="_blank">> 地圖連結</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-10 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div class="shop-pic">
            <img src="@/assets/image/shop1.jpg" alt="shop-pic" style="width:100%;height:230px">
          </div>
          <ul class="text-topic p-7">
            <li class="mb-3"><h3 class="title-side position-relative">文化中心店 - 2F</h3></li>
            <li class="h6 text-secondary mb-3">『部分口味現貨供應』</li>
            <li class="h5 lh-lg mb-3"> 地址 : 高雄市五福一路67號 <br>
              營業時間 : 10:30~22:00 <br>
              捷運站 : 輕軌凱旋公園站站 <br>
            </li>
            <li><a class="shop-link" href="https://goo.gl/maps/S2pfB7pu3a5EFcDP8" target="_blank">> 地圖連結</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-10 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
          <div class="shop-pic">
            <img src="@/assets/image/shop2.jpg" alt="shop-pic" style="width:100%;height:230px">
          </div>
          <ul class="text-topic p-7">
            <li class="mb-3"><h3 class="title-side position-relative">駁二藝術特區</h3></li>
            <li class="h6 text-secondary mb-3">『部分口味現貨供應』</li>
            <li class="h5 lh-lg mb-3"> 地址 : 高雄市大勇路1號 <br>
              營業時間 : 12:00~22:00 <br>
              捷運站 : 大勇站 <br>
            </li>
            <li><a class="shop-link" href="https://goo.gl/maps/NzkVckcde1vSR7XG6" target="_blank">> 地圖連結</a></li>
          </ul>
        </div>
      </div>
    </section>
    <!-- subscribe 歡迎訂閱 -->
    <section class="subscribe d-flex align-items-end pb-16">
      <div class="container">
        <div class="d-flex flex-column align-items-md-start align-items-center" data-aos="fade-up" data-aos-duration="2000">
          <Validation-observer v-slot="{ invalid }">
            <form @submit.prevent="subscription">
              <validation-provider rules="required|email" v-slot="{ errors, classes }">
                <div class="input-group">
                  <label for="inputEmail" class="h3 lh-1 text-white font-weight-bolder mb-6">記得<br> 訂閱以獲取更多資訊及專屬優惠！</label>
                  <input name="Email" type="email" v-model="email" :class="classes" class="form-control rounded-left py-8 px-5" id="inputEmail" placeholder="請輸入Email">
                  <button type="submit" class="btn btn-glass rounded-right" :disabled="invalid">訂閱</button>
                  <span class="invalid-feedback text-warning">{{ errors[0] }}</span>
                </div>
              </validation-provider>
            </form>
          </Validation-observer>
        </div>
      </div>
    </section>
    <!-- 酷碰code modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="couponModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-warning">
            <h5 class="modal-title text-topic" id="exampleModalCenterTitle">最新優惠</h5>
            <button type="button" class="close text-topic" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body home-modal h5 position-relative">
            <p class="home-modal-bg py-6 px-4">
              即日起結帳輸入優惠碼<span class="h3 text-danger">HappyCoupon</span>，
              即享所有品項<span class="h3 text-danger"> 8 折</span>優惠！
            </p>
          </div>
          <div class="modal-footer">
            <router-link to="/products" class="btn btn-warning" data-dismiss="modal">快去選購</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* global $ */
import Carousel from '@/components/front/Carousel'
export default {
  components: {
    Carousel
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    subscription () {
      $('#couponModal').modal('show')
    }
  }
}
</script>
