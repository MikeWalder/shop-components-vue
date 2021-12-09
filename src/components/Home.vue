<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="h1 pt-md-3 pb-md-3">Accueil</div>
        </div>
        <div class="col-4">
        </div>
      </div>
    </div>
  
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 col-xs-8 col-md-6 pb-3">
          <div class="input-group col-10 col-md-6">
            <transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown">
            <input v-model="searchKey" type="search" class="form-control border border-success" placeholder="Rechercher..." autocomplete="off">
            </transition>
              <span class="h4 pt-2 pl-3" v-if="searchKey && filtrationList.length >= 1">{{filtrationList.length}} résultat(s)&ensp;&ensp;&nbsp;</span>
              <span class="h4 pt-2 pl-3" v-else>Aucun résultat</span>
          </div>
            
        </div>
        <div class="col-2"></div>
        <div class="col-4 col-xs-4 col-md-3 pb-2 ml-5 shopping-cart animate__fadeIn" :class="cart.length > 0 ? 'bg-info' : ''">
          <div :class="cart.length > 0 ? 'd-inline' : 'd-none'" class="col-2 animate__fadeIn" style="height: 500px">
            <div class="h1 text-white">
              <u class="pb-3">Panier</u>
            </div>
            <div v-for="item, id in cart" :key="item.id" class="ml-auto text-left">
              <div class="container-fluid p-0">
                <div class="row">
                  <div class="col-3 rounded rounded-circle animate__animated animate__fadeIn">
                    <img :src="item.img" class="rounded-circle pt-3" style="width: 3vw">
                  </div>
                  <div class="col-6 p-0 bounceIn">
                    <div class="h5 ml-auto align-middle font-weight-bold pt-3 animate__bounceIn">{{item.description}}</div>
                    <span class="font-italic">quantité : {{item.quantity}}</span>
                    <i class="fas fa-plus ml-3 bg-light rounded-circle text-info p-1 animate__bounceIn" @click="addOneProduct(item)"></i>
                    <i class="fas fa-minus ml-3 bg-light rounded-circle text-info p-1 animate__bounceIn" @click="removeOneProduct(item, id)"></i>
                    <i class="fas fa-trash ml-3 bg-light rounded-circle text-info p-1 animate__bounceIn" @click="deleteProduct(id)"></i>
                  </div>
                  <div class="col-2">
                    <div class="h4 font-weight-bold align-middle pt-3 animate__animated animate__fadeIn">
                      {{item.price}}€
                    </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="btn btn-warning">
              <router-link :to="{ path: '/shopping',name: 'ShoppingCart', params: { id: cart.id, quantity: cart.quantity }}">
                <a v-bind:cartDatas="cart" @click="getCookieShop" class="text-left text-dark h4 pl-5" title="Accéder au panier">
                  Total : &ensp;&ensp;
                  <span class="h3 font-weight-bold pr-5">{{totalAmountCart}}€</span>
                </a>
              </router-link>
              <router-view/>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid pt-3">
      <div class="row">

          <div class="card-group col-2 pt-2 pb-2" v-for="item in filtrationList" :key="item.id">
            <div class="card">

              <div class="card-top">
                <img class="card-img-top img-thumbnail" :src="item.img" :alt="item.description">
              </div>

              <div class="card-body">
                <div class="card-descriptor">
                  <h5 class="card-title pt-2">{{item.description}}</h5>
                  <div class="btn btn-info">{{item.price}}€</div>
                </div>
                
                <div class="card-container">
                  <div class="like-container">
                    <input
                      type="checkbox"
                      name="checkboxing"
                      :id="item.id" 
                      :value="item.id" 
                      v-model="liked" 
                      @click="addToLiked(item)"
                    >
                    <label :for="item.id">
                      <!-- <i class="fas fa-heart fa-lg fa-checked" @click="displayLiked"></i> -->
                      <div class="btn btn-success">add</div>
                    </label>
                  </div>

                  <div class="add-to-cart">
                    <button @click="addToCart(item)">
                      <i class="fas fa-shopping-cart fa-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
    
  </div>
</template>



<script>
// @ is an alias to /src
export default {
  name: "Home",

  data() {
    return {
      searchKey: ""
    }
  },

  props: ['cartDatas'],

  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    cart() {
      return this.$store.getters.getCart;
    },
    liked() {
      return this.$store.getters.getLiked;
    },
    filtrationList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      let cookieValue = null;
      cookieValue == null ? this.liked == [] : this.liked == cookieValue;
      console.log(cookieValue);
      return cookieValue;
    }, 
    totalAmountCart() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].price * this.cart[item].quantity;
      }
      return total;
    },
    itemsTotalAmountCart() {
      let totalAmount = 0;
      for (let item in this.cart) {
        totalAmount = totalAmount + this.cart[item].quantity;
      }
      return totalAmount;
    }
  },

  methods: {
    addToLiked(prod) {
      for (let i = 0; i < this.liked.length; i++) {
        if (this.liked[i].id === prod.id) {
          return this.liked[i].quantity++;
        }
      }
      this.liked.push({
        id: prod.id,
        img: prod.img,
        description: prod.description,
        price: prod.price,
        quantity: 1,
      });
      console.log(this.liked);
    },
    addToCart(prod) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === prod.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: prod.id,
        img: prod.img,
        description: prod.description,
        price: prod.price,
        quantity: 1,
      });
      console.log(this.cart);
    },
    addOneProduct(item) {
      item.quantity = item.quantity + 1;
    },
    removeOneProduct(item, id) {
      if (item.quantity == 1) {
        this.deleteProduct(id);
      } else {
        item.quantity = item.quantity - 1;
      }
    },
    deleteProduct(id) {
      console.log(typeof(this.cart))
      console.log(this.cart[id])
      this.cart.splice(id, 1)
    },
    displayLiked() {
      console.log(this.liked)
    }
    /* getCookieShop() {
      document.addEventListener("click", () => {
        setTimeout(() => {
          document.cookie = ("getShop", JSON.stringify(this.liked));
        }, 300);
      });
      console.log(document.cookie("getShop"))
    } */
  },

  mounted() {
    this.getLikeCookie;
  }  
}
</script>


<style scoped>
.card-top {
  overflow: hidden;
}

.card-top > img:hover {
  transform: scale(1.1);
  transition: all 0.4s ease-in-out;
}

.like-container input {
  display: none;
}

.like-container .fa-heart:hover {
  color: rgba(251, 38, 38, 0.5);
}

.like-container label:checked .fa-heart {
  color: red;
}

.add-to-cart .fa-shopping-cart {
  color: #2eb7eb;
}

.add-to-cart button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

.card-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.card-body {
  padding: 0px;
}

.like-container input:checked ~ label .btn {
  color: red;
}

.like-container > input[type="checkbox"]:checked ~ label:checked .fa-heart {
  background: blue;
}

.like-container > input + label {
  color: black;
  transition: color 0.4s;
}

.card-descriptor {
  opacity: 0;
  height: 50px;
  display: flex;
  position: relative;
  bottom: -50px;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to bottom, #fff 0%, #bbb 50%, #fff 100%);
}

.card:hover .card-descriptor {
  opacity: 0.8;
  transform: translate(0px, -50px);
  transition: all 0.8s ease-in-out;
}

.shopping-cart {
  max-height: 500px;
  overflow: auto;
}
</style>