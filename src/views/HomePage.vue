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

  <div class="container mt-200">
    <div class="position-relative">
      <div class="position-absolute start-50 ban-text-2">
        <h4 class="h2 mb-3">Show Your Style</h4>
        <p class="fs-5 lh-lg d-md-block d-none">
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
        class="img-home-2 position-absolute top-50 start-50"
      />
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

//animo end

// .img-door {
//   top: 80%;
//   left: 50%;
// }

// .img-home-2 {
//   width: 40%;
//   background-image: url('https://images.pexels.com/photos/9947823/pexels-photo-9947823.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: 50%;
//   border-radius: 200px 200px 0 0;
// }
</style>
