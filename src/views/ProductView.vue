<template>
  <div class="container">
    <h2>單一產品</h2>
    <img :src="product.imageUrl" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    }
  },

  methods: {
    getProduct() {
      const { id } = this.$route.params
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
        )

        .then((res) => {
          console.log(res)
          this.product = res.data.product
          console.log(this.product)
          console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    }
  },

  mounted() {
    this.getProduct()
  }
}
</script>
