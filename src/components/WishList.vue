<template>
  <div class="wishlist">
    <h1 class="pt-md-3">Favoris</h1>

    <div v-if="liked.length > 0" class="container pt-3">
      <div class="row">

          <div class="card-group col-3 pt-2 pb-2" v-for="item in liked" :key="item.id">
            <div class="card border-0">

              <div class="card-top">
                <img class="card-img-top rounded-circle" :src="item.img" :alt="item.description">
              </div>

              <div class="card-body">
                <div class="card-descriptor">
                  <div class="row text-center">
                    <h5 class="card-title pt-2">{{item.description}}</h5>
                    <div class="btn btn-info btn-lg ml-4">{{item.price}}€</div>
                  </div>
                </div>
              </div>
              <!--  
                <div class="card-container">
                  <div class="like-container">
                    <input
                      type="checkbox"
                      name="checkbox"
                      :id="item.id"
                      :value="item.id"
                      v-model="liked"
                      @click="addToLiked(item)"
                    >
                    <label :for="item.id">
                      <i class="fas fa-heart fa-lg" @click="displayLiked"></i>
                    </label>
                  </div>

                  <div class="add-to-cart">
                    <button @click="addToCart(item)">
                      <i class="fas fa-shopping-cart fa-lg"></i>
                    </button>
                  </div>
                </div>
              </div> -->
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'WishList',

  computed: {
    produits() {
      //Getters
      return this.$store.getters.getProduits;
    },
    liked() {
      //Getters
      return this.$store.getters.getLiked;
    },
    totalAmountCart() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].price * this.cart[item].quantity;
      }
      return total;
    }
  }
}
</script>

<style scoped>
table img {
  height: 60px;
  padding: 0;
}
</style>