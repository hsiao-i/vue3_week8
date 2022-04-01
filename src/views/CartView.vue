<template>
  <div class="container">
    <h2 class="mt-5">購物車頁面</h2>
    <div class="mt-4">
      <!-- 產品Modal -->
      <!-- <product-modal
        ref="productModal"
        :id="productId"
        @add-cart="addToCart"
      ></product-modal> -->
      <!-- 產品Modal -->

      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td style="width: 200px">
              <div
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center;
                "
              ></div>
            </td>
            <td>{{ product.title }}</td>
            <td>
              <div class="h5" v-if="product.price === product.origin_price">
                {{ product.price }} 元
              </div>
              <div v-else>
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <div class="h5">現在只要 {{ product.price }} 元</div>
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary">
                  <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addToCart(product.id)"
                  :disabled="isLoadingItem === product.id"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    v-show="isLoadingItem === product.id"
                  ></span>
                  <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 購物車列表 -->
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          @click="removeCartAll"
          :disabled="cartData.carts.length === 0"
        >
          清空購物車
        </button>
      </div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cartData.carts">
            <tr v-for="cart in cartData.carts" :key="cart.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(cart.id)"
                  :disabled="isLoadingItem === cart.id"
                >
                  <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                  x
                </button>
              </td>
              <td>
                {{ cart.product.title }}
                <!-- <div class="text-success">已套用優惠券</div> -->
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <!-- <input min="1" type="number" class="form-control" /> -->
                    <select
                      class="form-select"
                      @change="updateCartItem(cart)"
                      v-model="cart.qty"
                      :disabled="isLoadingItem === cart.id"
                    >
                      <option
                        :value="num"
                        v-for="num in 20"
                        :key="`${num}+${cart.id}`"
                      >
                        {{ num }}
                      </option>
                    </select>
                    <span class="input-group-text" id="basic-addon2">{{
                      cart.product.unit
                    }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <!-- <small class="text-success">折扣價：</small> -->
                {{ cart.product.price }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cartData.total }}</td>
          </tr>
          <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ }}</td>
              </tr> -->
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  data() {
    return {
      products: [],
      cartData: {
        carts: []
      },
      isLoadingItem: ''
    }
  },
  methods: {
    getProduct() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          // console.log(res);
          this.products = res.data.products
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      this.$http
        .post(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          console.log(res)
          //   this.getCart()
          //   this.isLoadingItem = ''
          //   this.$refs.productModal.closeModal()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted() {
    this.getProduct()
    emitter.emit('get-cart')
  }
}
</script>
