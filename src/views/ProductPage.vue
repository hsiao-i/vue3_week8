<template>
  <LoadingOverlay :active="isLoading" :z-indes="1000"></LoadingOverlay>
  <div class="container mt-5 mb-100">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" href="#">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products" href="#">全部產品</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.category }}
        </li>
      </ol>
    </nav>
    <div class="row gx-5 align-items-center justify-content-around">
      <div
        class="col-md-5 product-img rounded-3"
        :style="{ backgroundImage: `url(${product.imageUrl})` }"
      ></div>

      <div class="col-md-6">
        <div class="h-100">
          <h3 class="product-title mb-3">{{ product.title }}</h3>
          <p class="lh-lg ps-3 fs-7">
            {{ product.description }}
          </p>
          <p v-if="product.price === product.origin_price" class="fs-5-5">
            NT$ {{ product.price }}
          </p>
          <p v-else class="text-danger fs-5-5">
            NT$ {{ product.price }}
            <del class="fs-7 text-secondary"
              >NT$ {{ product.origin_price }}</del
            >
          </p>

          <div class="d-flex justify-content-end align-items-center">
            <label class="form-label me-2">數量</label>
            <select name="qty" id="qty" class="form-select w-25">
              <option value="1" v-for="num in 20" :key="num + 'selected'">
                {{ num }}
              </option>
            </select>
          </div>
          <div class="mt-5 d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-outline-danger w-50"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
            <button type="button" class="btn btn-danger action-btn">
              立即購買
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <h5 class="h5 text-center">商品描述</h5>
    <div class="text-center">
      <p class="mb-3">{{ product.content }}</p>
      <img
        :src="product.imageUrl"
        :alt="product.title"
        class="mb-3 description-img"
      />
      <div v-if="Array.isArray(product.imagesUrl)">
        <div v-for="(imgs, key) in product.imagesUrl" :key="key + 12">
          <img :src="imgs" :alt="product.title" class="description-img mb-3" />
        </div>
      </div>
      <h4 class="fs-5-5 mt-5">購物須知</h4>
      <p class="text-start">商品退換貨、尺寸</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false
    }
  },
  methods: {
    getProduct() {
      this.isLoading = true
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          console.log(this.$route.params.id)
          this.product = res.data.product
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data)
        })
    },
    addToCart(id, qty = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty
      }

      this.$http
        .post(url, { data: data })
        .then((res) => {
          this.product = res.data
          console.log(res)
          alert('成功加入購物車')
          this.isLoading = false
          this.getProduct()
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.message)
        })
    }
  },
  watch: {
    $route() {
      this.getProduct()
    }
  },
  mounted() {
    this.getProduct()
  }
}
</script>

<style scoped>
.product-img {
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1590820204872-81fbd313de9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.description-img {
  width: 50%;
}

.action-btn {
  width: 48%;
}

@media (max-width: 768px) {
  .product-title {
    margin-top: 24px;
  }
}
</style>
