<template>
  <LoadingOverlay :active="isLoading" :z-indes="1000"></LoadingOverlay>
  <div>
    <div class="d-flex justify-content-around w-50 mx-auto my-5">
      <div>
        <div class="rounded-pill text-center order-shape-light mx-auto mb-1">
          <p class="pt-2">1</p>
        </div>
        <p class="text-center fs-7">填寫資料</p>
      </div>

      <div>
        <div class="rounded-pill text-center order-shape mx-auto mb-1">
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
  <div class="container">
    <div class="row g-5 justify-content-around">
      <div class="col-12 col-md-6">
        <div class="table-cus">
          <h5
            class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
            style="--bs-bg-opacity: 0.5"
          >
            確認購物車內容
          </h5>

          <div class="px-4">
            <table class="w-100 mt-4">
              <thead class="thead">
                <tr class="text-center">
                  <th scope="col" class="py-3">商品資訊</th>

                  <th scope="col">小計</th>
                </tr>
              </thead>
              <tbody class="border-bottom">
                <tr
                  class="text-center"
                  v-for="(orderCart, key) in order.products"
                  :key="`${key} + ${order.id}`"
                >
                  <td class="p-3">
                    <div class="d-md-flex d-block align-items-center">
                      <img
                        :src="orderCart.product.imageUrl"
                        :alt="orderCart.product.title"
                        class="cart-img me-3 rounded-3"
                      />
                      <div>
                        <h6 class="mt-2 text-center">
                          {{ orderCart.product.title }}
                        </h6>

                        <p class="text-secondary">數量：{{ orderCart.qty }}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p
                      v-if="
                        orderCart.product.price ===
                        orderCart.product.origin_price
                      "
                    >
                      NT$ {{ orderCart.product.price }}
                    </p>
                    <p v-else class="text-danger">
                      NT$ {{ orderCart.product.price }} <br />
                      <del class="text-secondary fs-7"
                        >NT$ {{ orderCart.product.origin_price }}</del
                      >
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-4">
              <div class="w-50 mt-3">
                <div class="d-flex justify-content-between">
                  <p>商品小計</p>
                  <p>NT$ {{ order.total }}</p>
                </div>
                <!-- <div class="d-flex justify-content-between">
                  <p>折抵金額</p>
                  <p>
                    - NT$ {{ `${order.total - order.products.product.total}` }}
                  </p>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <p>結帳金額</p>
                  <p class="text-danger fs-5-5">NT$ {{ order.total }}</p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 mt-0 control">
        <div class="table-cus my-5">
          <h5
            class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
            style="--bs-bg-opacity: 0.5"
          >
            確認顧客資訊
          </h5>
          <div class="px-5 py-4 text-center">
            <!-- <table class="table">
              <tbody>
                <tr>
                  <th>訂單金額</th>
                  <td>NT$ {{}}</td>
                </tr>
                <tr>
                  <th>訂單編號</th>
                  <td>{{}}</td>
                </tr>
                <tr>
                  <th>訂單時間</th>
                  <td>{{}}</td>
                </tr>
                <tr>
                  <th>收件人姓名</th>
                  <td>{{}}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{{}}</td>
                </tr>
                <tr>
                  <th>聯絡電話</th>
                  <td>{{}}</td>
                </tr>
                <tr>
                  <th>收件地址</th>
                  <td>{{}}</td>
                </tr>
                <tr>
                  <th>付款方式</th>
                  <td>
                    <select
                      name="pay"
                      id="pay"
                      v-modal="pay"
                      class="form-select"
                    >
                      <option value="" selected disabled>請選擇付款方式</option>
                      <option value="ATM">ATM 轉帳</option>
                      <option value="visa">信用卡</option>
                      <option value="convenience">超商付款</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>留言</th>
                  <td>{{}}</td>
                </tr>
              </tbody>
            </table> -->

            <div class="row">
              <div class="col-4">
                <ul class="list-unstyled text-start">
                  <li class="mb-3">訂單金額</li>
                  <li class="mb-3">訂單編號</li>
                  <li class="mb-3">訂購時間</li>
                  <li class="mb-3">收件人姓名</li>
                  <li class="mb-3">Email</li>
                  <li class="mb-3">聯絡電話</li>
                  <li class="mb-3">收件地址</li>
                  <li class="mb-3">付款方式</li>
                  <li class="mb-3">留言</li>
                </ul>
              </div>
              <div class="col-7">
                <ul class="list-unstyled text-start">
                  <li class="mb-3 text-danger">NT$ {{ order.total }}</li>
                  <li class="mb-3">{{ order.id }}</li>
                  <li class="mb-3">{{ $filters.date(order.create_at) }}</li>
                  <li class="mb-3">{{ order.user.name }}</li>
                  <li class="mb-3">{{ order.user.email }}</li>
                  <li class="mb-3">{{ order.user.tel }}</li>
                  <li class="mb-3">{{ order.user.address }}</li>
                  <li class="mb-3">
                    <select
                      name="orderPay"
                      id="orderPay"
                      v-model="pay"
                      class="form-select"
                      placeholder="請輸入付款方式"
                    >
                      <option value="" selected disabled>請選擇付款方式</option>
                      <option value="ATM">ATM 轉帳</option>
                      <option value="visa">信用卡</option>
                      <option value="convenience">超商付款</option>
                    </select>
                  </li>
                  <li class="mb-3">{{ order.message }}</li>
                </ul>
              </div>
              <!-- <button type="button" class="btn btn-danger">
                <router-link :to="`/order/${orderId}`"></router-link>結帳付款
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import emitter from '@/libs/emitter'
export default {
  data() {
    return {
      id: '',
      order: {
        user: {}
      },
      pay: '',
      isLoading: false
    }
  },
  methods: {
    getAllOrder() {
      this.isLoading = true

      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/orders`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.order = res.data.orders.this.id

          this.isLoading = false
          console.log(this.$route.params)
        })
        .catch((err) => {
          alert(err.response)
          this.isLoading = false
        })
    },
    // 取得單一產品的訂單資料 (結帳資料)
    getOrder() {
      this.isLoading = true
      this.id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order/${this.id}`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.order = res.data.order

          console.log(this.order)
          this.isLoading = false
          console.log(this.$route.params)
        })
        .catch((err) => {
          alert(err.response)
          this.isLoading = false
        })
    },
    // 取得購物車資料
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
    }
    // 結帳付款
    // orderPay() {
    //   const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/pay/${this.id}`
    //   this.$http
    //     .post(url)
    //     .then((res) => {
    //       console.log(res)
    //       alert('付款完成！謝謝您的購買 ✿')
    //     })
    //     .catch((err) => {
    //       alert(err.response)
    //     })
    // }
  },
  mounted() {
    // emitter.on('get-order', (form) => {
    //   this.form = form
    //   console.log('觸發')
    // })
    // console.log(this.form)
    // this.getCart()
    this.getOrder()
    this.getCart()
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
  .control {
    margin-bottom: 50px;
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
