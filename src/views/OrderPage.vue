<template>
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
      <div class="col-12 col-md-5">
        <div class="table-cus">
          <h5
            class="h5 bg-danger bg-gradient rounded-top p-3 text-white"
            style="--bs-bg-opacity: 0.5"
          >
            確認購物車內容
          </h5>

          <!-- <div class="px-4">
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
                      <p>數量：</p>
                    </div>
                  </td>

                  <td>NT$ {{ `${cart.product.price * cart.qty}` }}</td>
                </tr>
              </tbody>
            </table>
            <div class="mt-4">
              <div class="w-50 mt-3">
                <div class="d-flex justify-content-between">
                  <p>商品小計</p>
                  <p>NT$ {{ cartData.total }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p>折抵金額</p>
                  <p>- NT$ {{ `${cartData.total - cartData.final_total}` }}</p>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <p>結帳金額</p>
                  <p class="text-danger fs-5-5">
                    NT$ {{ cartData.final_total }}
                  </p>
                </div>
              </div>
            </div>
          </div> -->
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
                <ul class="list-unstyled">
                  <li class="mb-3"></li>
                  <li class="mb-3">-MzIizme_NZdALmoEyRy</li>
                  <li class="mb-3"></li>
                  <li class="mb-3"></li>
                  <li class="mb-3"></li>
                  <li class="mb-3"></li>
                  <li class="mb-3"></li>
                  <li class="mb-3"></li>
                  <li class="mb-3"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
