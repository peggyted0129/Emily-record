<template>
  <section class="login pb-6 text-topic">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-8 col-12">
          <div class="login-banner"></div>
        </div>
        <div class="col-md-4 col-12">
          <div class="login-from">
            <h2 class="font-weight-bolder mb-md-8 mb-5">Log in</h2>
            <Validation-observer v-slot="{ invalid }">
              <form @submit.prevent="signin">
                <validation-provider rules="required|email" v-slot="{ errors, classes }" name="登入帳號">
                  <div class="form-group mb-md-6 mb-4">
                    <label for="account" class="text-topic font-weight-bolder">帳號</label>
                    <input type="email" v-model="user.username" class="form-control" id="account"
                    :class="classes" placeholder="email@example.com">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>
                <validation-provider rules="required" v-slot="{ errors, classes }" name="登入密碼">
                  <div class="form-group mb-md-6 mb-4">
                    <label for="password" class="text-topic font-weight-bolder">密碼</label>
                    <input type="password" v-model="user.password" class="form-control" id="password"
                    :class="classes" placeholder="Password">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>
                <div class="remember custom-control custom-checkbox mb-7 mb-md-10">
                  <input type="checkbox" class="custom-control-input" name="remember" id="remember"/>
                  <label class="custom-control-label text-topic" for="remember">記住我</label>
                </div>
                <button type="submit" class="btn btn-warning btn-block font-weight-bolder" :disabled="invalid">登入</button>
              </form>
            </Validation-observer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          const { token } = response.data
          const { expired } = response.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          vm.$router.push('/admin/products')
        }
      })
    }
  }
}
</script>
