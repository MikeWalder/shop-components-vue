<template>
  <div class="home">
    <h1 class="pt-md-3">Accueil</h1>
  
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <div class="input-group border border-secondary">
            <input type="text" class="form-control" placeholder="Rechercher..." autocomplete="off">
              <span v-if="searchKey && filtrationList.length >= 1">
              {{filtrationList.length}} résultat
              <span v-if="filtrationList > 1">s</span>
              </span>
            <div v-if="filtrationList.length == []" class="no-result">
              <h3>Aucun résultat trouvé</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container pt-3">
      <div class="row">
        <div class="col-3 card-group pt-2 pb-2" v-for="item in filtrationList" :key="item.id">
          <div class="card">

            <div class="card-top">
              <img class="card-img-top img-thumbnail" :src="item.img" :alt="item.description">
            </div>

            <div class="card-body">
              <h4 class="card-title">{{item.description}}</h4>
              <p class="card-text mb-0">{{item.price}}€</p>

              <div class="card-container">
                <div class="like-container">
                  <input
                    type="checkbox"
                    name="checkbox"
                    :id="item.id"
                    :value="item.id"
                    v-model="liked"
                    @click="setLikeCookie()"
                  >
                  <label :for="item.id">
                    <i class="fas fa-heart"></i>
                  </label>
                </div>

                <div class="add-to-cart">
                  <button @click="addToCart(item)">
                    <i class="fas fa-shopping-cart"></i>
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
      products: [
      { id: 1, description: "Quarz Luxe", price: 12, img: 'img/quarz-luxe.jpg'},
      { id: 2, description: 'Curren Business', price: 20, img: 'img/curren-business.JPG'},
      { id: 3, description: 'Curren Sport', price: 5, img: 'img/curren-sport.JPG'},
      { id: 4, description: 'Jaragar Racing', price: 8, img: 'img/jaragar-racing.JPG'},
      { id: 5, description: 'Liges Hommes', price: 3, img: 'img/liges-hommes.JPG'},
      { id: 6, description: 'Maserati Mechanical', price: 65, img: 'img/maserati-mechanical.JPG'},
      { id: 7, description: 'Montre Mecanique', price: 25, img: 'img/montre-mecanique.JPG'},
      { id: 8, description: 'Brand Designer', price: 28, img: 'img/brand-designer.JPG'},
      { id: 9, description: 'Relogio Masculino', price: 4, img: 'img/relogio-masculino.JPG'},
      { id: 10, description: 'Tissot Multifunction', price: 29, img: 'img/tissot-multifunction.JPG'},
      { id: 11, description: 'Hip Hop Gold', price: 87, img: 'img/hiphop-gold.JPG'},
      { id: 12, description: 'Mesh Genova', price: 6, img: 'img/mesh-genova.JPG'},
    ],
      searchKey: "",
      liked: [],
      cart: []
    }
  },

  computed: {
    filtrationList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      let cookieValue = 3;
      cookieValue == null ? this.liked == [] : this.liked == cookieValue;
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
    setLikeCookie() {
      document.addEventListener("input", () => {
        setTimeout(() => {
          this.$cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
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
      this.$delete(this.cart, id);
    },
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
</style>