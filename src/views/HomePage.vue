<template>
  <LoadingOverlay :active="isLoading" :z-index="1000"></LoadingOverlay>
  <div class="text-end banner rounded-3 position-relative mt-5">
    <div class="position-absolute top-50 ban-text">
      <h4 class="h2 mb-3">建立生活的儀式感</h4>
      <p class="fs-5 d-sm-block d-none lh-lg">
        加上自己的小巧思 <br />
        讓生活更加不同 <br />
        搭配屬於你的風格
      </p>
    </div>
  </div>
  <!-- 拱門區塊 -->
  <!-- <div class="container mt-200">
    <div class="position-relative">
      <div class="position-absolute start-50 ban-text-2">
        <h4 class="h2 mb-3">Show Your Style</h4>
        <p class="fs-5 d-md-block d-none">
          讓生活不再單調 <br />
          展現自我風格
        </p>
        <router-link
          to="/products"
          class="animoButtonOverlay text-decoration-none"
          >← 找尋自我風格
        </router-link>
      </div>

      <img
        src="https://images.pexels.com/photos/9947832/pexels-photo-9947832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="ring"
        class="img-home"
      />

      <img
        src="https://images.pexels.com/photos/9947823/pexels-photo-9947823.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="ring"
        class="img-home-2 position-absolute top-50 start-50 mb-5"
      />
    </div>
  </div> -->

  <div class="container mt-200">
    <div class="position-relative">
      <div class="position-absolute start-50 ban-text-2">
        <h4 class="h2 mb-3">Show Your Style</h4>
        <p class="fs-5 d-md-block lh-lg d-none">
          讓生活不再單調 <br />
          展現自我風格
        </p>
        <router-link
          to="/products"
          class="animoButtonOverlay text-decoration-none"
          >← 找尋自我風格
        </router-link>
      </div>

      <img
        src="https://images.pexels.com/photos/9947832/pexels-photo-9947832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="ring"
        class="img-home"
      />
      <div class="d-flex justify-content-end position-relative">
        <p
          class="fs-5 lh-lg pt-5 mt-100 me-5 position-absolute start-0 top-50 d-none d-md-block"
        >
          在繁忙的生活中 <br />
          妝點自己 <br />
          小小的裝飾令生活更加質感
        </p>
        <img
          src="https://images.pexels.com/photos/9947823/pexels-photo-9947823.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="ring"
          class="img-home-2 mb-5"
        />
      </div>
    </div>
  </div>

  <!-- 轉換轉品區塊 -->
  <div class="mt-200 mb-5">
    <div class="row g-0">
      <div class="col-12 col-sm-6 col-md-3 position-relative">
        <router-link to="/product/-MzZVrK6FsFCJC5E3NmY" class="d-block">
          <div>
            <img
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="手鍊"
              class="category-img"
            />
          </div>

          <!-- <p
          class="category-router position-absolute start-50 top-50 fs-4 text-center category-p"
        >
          手鍊
        </p> -->
        </router-link>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <router-link to="/product/-MzefMxogbXCbC5ZOsRG" class="d-block">
          <div>
            <img
              src="https://images.unsplash.com/photo-1611652032946-2e1a02fb34da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt="戒指"
              class="category-img"
            />
          </div>
        </router-link>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <router-link to="/product/-MzeVFhMSyvjq-6h1388" class="d-block">
          <div>
            <img
              src="https://images.unsplash.com/photo-1590820229450-4212a4bac17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="耳環"
              class="category-img"
            />
          </div>
        </router-link>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <router-link to="/product/-MzZFkkVuUzGGHQGdRz9" class="d-block">
          <div>
            <img
              src="https://images.unsplash.com/photo-1611085582956-da557acbc3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="項鍊"
              class="category-img"
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  }
}
</script>

<style lang="scss">
.banner {
  width: 80%;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

@media (max-width: 576px) {
  .banner {
    height: 400px;
  }
  .ban-text {
    margin-top: 100px;
  }
}

.ban-text {
  right: -10%;
}

.img-home {
  width: 40%;
  border-radius: 120px;
  object-fit: cover;
}

.img-home-2 {
  width: 40%;
  border-radius: 200px 200px 0 0;
  object-fit: cover;
}

.ban-text-2 {
  top: 5%;
}

.ban-btn {
  bottom: -20%;
  left: 30%;
}

//animo

.animoButtonOverlay {
  display: inline-block;
  padding: 10px 25px;
  position: relative;
  color: #fff;
  cursor: pointer;
}
.animoButtonOverlay::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 5px;
  right: 5px;
  background-color: #c18787;
  border-radius: 10px;
  z-index: -1;
  transition: transform 0.2s ease-in-out;
}
.animoButtonOverlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #b27b7b;
  border-radius: 10px;
}
.animoButtonOverlay:hover::before {
  transform: translate(6px, -4px);
}

// 分類
.category-img {
  width: 100%;
  height: 300px;
  object-fit: cover;

  //   background-image: url('https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80');
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: 50%;
}
.category-img:hover {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
  transform: scale(1.1, 1.1);
  transition: all 0.5s;

  cursor: pointer;
}
.category-p {
  z-index: 1;
  color: #707070;
  background-color: #fff;
}
</style>
