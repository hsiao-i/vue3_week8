<template>
  <FrontNavbar></FrontNavbar>

  <router-view></router-view>
  <!-- @emit-order="getFormInfo" -->
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'

export default {
  components: {
    FrontNavbar
  },

  data() {
    return {
      orderForm: {}
    }
  },
  methods: {
    getFormInfo(form) {
      this.orderForm = form
      console.log(this.orderForm)
      console.log(form)
      // emitter.on('get-form', (form) => {
      //   this.orderForm = form
      // })
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #fff8f8;
  color: #707070;
}

.mb-100 {
  margin-bottom: 100px;
}

.mt-200 {
  margin-top: 200px;
}

.fs-5-5 {
  font-size: 18px;
}

.fs-7 {
  font-size: 14px;
}

.text-white {
  color: #ffffff;
}
</style>
