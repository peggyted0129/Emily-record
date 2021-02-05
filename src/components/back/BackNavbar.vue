<template>
  <div class="back-nav d-flex justify-content-between align-items-center pt-11 pb-3 px-5">
    <h2 class="h4 font-weight-bolder text-topic py-4">Backstage management</h2>
    <a href="#" @click.prevent="signout" class="btn btn-topic btn-lg h4">登出</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    signout () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>
