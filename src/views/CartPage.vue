<template>
  <LoadingOverlay :active="isLoading" :z-indes="1000"></LoadingOverlay>
  <div class="container">
    <div>
      <div class="d-flex justify-content-around w-50 mx-auto my-5">
        <div>
          <div class="rounded-pill text-center order-shape mx-auto mb-1">
            <p class="pt-2">1</p>
          </div>
          <p class="text-center fs-7">填寫資料</p>
        </div>

        <div>
          <div class="rounded-pill text-center order-shape-light mx-auto mb-1">
            <p class="pt-2">2</p>
          </div>
          <p class="text-center fs-7">確認訂單</p>
        </div>

        <div>
          <div class="rounded-pill text-center order-shape-light mx-auto mb-1">
            <p class="pt-2">3</p>
          </div>
          <p class="text-center fs-7">購買完成</p>
        </div>
      </div>
    </div>
    <!-- 購物車內容 -->
    <div class="table-cus">
      <h5
        class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
        style="--bs-bg-opacity: 0.5"
      >
        購物車
      </h5>
      <div v-if="cartData.carts.length === 0" class="text-center p-5">
        <p>購物車內沒有商品喔</p>
        <router-link to="/products"
          ><button
            type="button"
            class="btn btn-danger w-25 text-white bg-gradient"
          >
            前往逛逛
          </button></router-link
        >
      </div>
      <div class="px-4" v-else>
        <table class="w-100 mt-4" ref="table">
          <thead class="thead">
            <tr class="text-center">
              <th scope="col" class="py-3">商品資訊</th>
              <th scope="col">單件價格</th>

              <!-- <th scope="col">小計</th> -->
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="border-bottom">
            <tr
              class="text-center"
              v-for="cart in cartData.carts"
              :key="cart.id"
            >
              <td class="p-3">
                <div class="d-md-flex d-block align-items-center">
                  <img
                    :src="cart.product.imageUrl"
                    :alt="cart.product.title"
                    class="cart-img me-3 rounded-3"
                  />
                  <h6 class="mt-2 text-center">{{ cart.product.title }}</h6>
                </div>
              </td>
              <td>
                <p v-if="cart.product.price === cart.product.origin_price">
                  NT$ {{ cart.product.price }}
                </p>
                <p v-else class="text-danger">
                  NT$ {{ cart.product.price }} <br />
                  <del class="text-secondary fs-7"
                    >NT$ {{ cart.product.origin_price }}</del
                  >
                </p>

                <select
                  name="qty"
                  id="qty"
                  class="form-select w-75"
                  v-model="cart.qty"
                  @change="changeCart(cart)"
                >
                  <option
                    :value="num"
                    v-for="num in 20"
                    :key="`${cart.id} + ${num}`"
                  >
                    {{ num }}
                  </option>
                </select>
              </td>

              <!-- <td>NT$ {{ `${cart.product.price * cart.qty}` }}</td> -->
              <td>
                <a href="#" @click.prevent="deleteCart(cart.id)"
                  ><i class="bi bi-trash text-secondary fs-6"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 優惠券與結帳金額 -->
        <div class="row">
          <div class="col-6 mt-4">
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="deleteAllCart"
            >
              清空購物車
            </button>
          </div>
          <div class="col-6">
            <div class="mt-4">
              <div class="d-flex">
                <input
                  type="text"
                  class="form-control w-75 rounded-0 rounded-start border-end-0"
                  placeholder="請輸入優惠碼"
                  v-model="coupon"
                />

                <button
                  type="button"
                  class="btn btn-outline-danger w-25"
                  @click="useCoupon"
                >
                  使用優惠券
                </button>
              </div>

              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <p>商品小計</p>
                  <p>NT$ {{ cartData.total }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p>折抵金額</p>
                  <p>
                    - NT$
                    {{ `${Math.ceil(cartData.total - cartData.final_total)}` }}
                  </p>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <p>結帳金額</p>
                  <p class="text-danger fs-5-5">
                    NT$ {{ `${Math.ceil(cartData.final_total)}` }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 填寫資訊 -->
    <div class="table-cus my-5">
      <h5
        class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
        style="--bs-bg-opacity: 0.5"
      >
        填寫顧客資訊
      </h5>
      <div class="p-4">
        <VForm ref="form" v-slot="{ errors }" @submit="submitOrder">
          <div class="mb-3">
            <label for="name" class="form-label"
              >姓名<span class="text-danger fs-5-5 ms-1">*</span></label
            >

            <VField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入收件人姓名"
              rules="required"
              v-model="form.user.name"
            ></VField>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label"
              >Email<span class="text-danger fs-5-5 ms-1">*</span></label
            >
            <VField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></VField>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label"
              >聯絡電話<span class="text-danger fs-5-5 ms-1">*</span></label
            >
            <VField
              id="phone"
              name="聯絡電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['聯絡電話'] }"
              placeholder="請輸入聯絡電話"
              rules="required|min:8|max:10"
              v-model="form.user.tel"
            ></VField>
            <ErrorMessage
              name="聯絡電話"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label"
              >收件地址<span class="text-danger fs-5-5 ms-1">*</span></label
            >
            <VField
              id="address"
              name="收件地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['收件地址'] }"
              placeholder="請輸入收件地址"
              rules="required"
              v-model="form.user.address"
            ></VField>
            <ErrorMessage
              name="收件地址"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>
          <!-- <div class="mb-3">
            <label for="pay" class="form-label">付款方式<span class="text-danger fs-5-5 ms-1">*</span></label>
            <VField
              id="pay"
              name="付款方式"
              as="select"
              class="form-select"
              :class="{ 'is-invalid': errors['付款方式'] }"
              placeholder="請選擇付款方式"
              rules="required"
              v-model="pay"
            >
              <option value="default" selected disabled>請選擇付款方式</option>
              <option value="ATM">ATM 轉帳</option>
              <option value="visa">信用卡</option>
              <option value="visa">超商付款</option>
            </VField>
            <ErrorMessage
              name="付款方式"
              class="invalid-feedback"
            ></ErrorMessage>
          </div> -->
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-danger w-100"
            :disabled="
              cartData.carts.length === 0 || Object.keys(errors).length > 0
            "
          >
            確認訂單
          </button>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
// import emitter from '@/libs/emitter'
export default {
  emits: ['emit-order'],
  data() {
    return {
      cartData: {
        carts: []
      },
      coupon: '',
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
          // pay: ''
        },
        message: ''
      },
      pay: 'default',
      orderId: ''
    }
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.cartData = res.data.data
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response)
          this.isLoading = false
        })
    },
    // 使用優惠券
    useCoupon() {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: this.coupon
      }

      this.$http.post(url, { data: data }).then((res) => {
        console.log(res)
        alert(res.data.message)
        this.getCart()
      })
    },
    // 修改數量
    changeCart(cart) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${cart.id}`
      const data = {
        product_id: cart.product.id,
        qty: cart.qty
      }
      this.$http
        .put(url, { data: data })
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response)
          this.isLoading = false
        })
    },
    // 刪除購物車
    deleteCart(id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${id}`

      this.$http
        .delete(url)
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.getCart()
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response)
          this.isLoading = false
        })
    },
    // 清空購物車
    deleteAllCart() {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/carts`

      this.$http
        .delete(url)
        .then((res) => {
          console.log(res)
          alert('已清空購物車')
          this.getCart()
        })
        .catch((err) => {
          alert(err.response)
        })
    },
    // 送出訂單
    submitOrder() {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order`
      this.isLoading = true
      const orderInfo = this.form

      this.$http
        .post(url, { data: orderInfo })
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.isLoading = false
          // 取得訂單 id ，為了跳轉到訂單確認頁面
          this.orderId = res.data.orderId
          this.$router.push(`/order/${this.orderId}`)
          console.log(this.orderId)

          // emit 傳訂單資料到 frontView，再從 frontView 去撈資料
          //   emitter.emit('get-order', this.cartData)
          //   this.$emit('emit-order', this.form)
          //   emitter.emit('get-order', this.form)
        })
        .catch((err) => {
          alert(err.response)
          this.isLoading = false
        })
    }
  },
  watch: {
    $route() {
      this.getCart()
    }
  },
  mounted() {
    this.getCart()
    console.log(this.cartData.carts.product_id)
  }
}
</script>

<style scoped>
.order-shape {
  background-color: #c18787;
  color: #ffffff;
  width: 45px;
  height: 45px;
}

.order-shape-light {
  background-color: #e3caca;
  color: #ffffff;
  width: 45px;
  height: 45px;
}

.cart-img {
  height: 150px;
  width: 40%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .cart-img {
    width: 90%;
    margin-right: 0px !important;
  }
}

.table-cus {
  background-color: #ffffff;
  box-shadow: 2px 2px 10px 1px #eae7e7;
}

.thead {
  border-bottom: 2px solid #e9e8e8;
}
</style>
