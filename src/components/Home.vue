<template>
  <div class="home">
    <h1 class="pt-md-3">Accueil</h1>
  </div>
</template>



<script>
// @ is an alias to /src


export default {
  name: "Home",
  data() {
    return {
      products: [
      { id: 1, description: "Quarz Luxe", price: 12, img: 'assets/img/quarz-luxe.JPG'},
      { id: 2, description: 'Curren Business', price: 20, img: 'assets/img/curren-business.JPG'},
      { id: 3, description: 'Curren Sport', price: 5, img: 'assets/img/curren-sport.JPG'},
      { id: 4, description: 'Jaragar Racing', price: 8, img: 'assets/img/jaragar-racing.JPG'},
      { id: 5, description: 'Liges Hommes', price: 3, img: 'assets/img/liges-hommes.JPG'},
      { id: 6, description: 'Maserati Mechanical', price: 65, img: 'assets/img/maserati-mechanical.JPG'},
      { id: 7, description: 'Montre Mecanique', price: 25, img: 'assets/img/montre-mecanique.JPG'},
      { id: 8, description: 'Brand Designer', price: 28, img: 'assets/img/brand-designer.JPG'},
      { id: 9, description: 'Relogio Masculino', price: 4, img: 'assets/img/relogio-masculino.JPG'},
      { id: 10, description: 'Tissot Multifunction', price: 29, img: 'assets/img/tissot-multifunction.JPG'},
      { id: 11, description: 'Hip Hop Gold', price: 87, img: 'assets/img/hiphop-gold.JPG'},
      { id: 12, description: 'Mesh Genova', price: 6, img: 'assets/img/mesh-genova.JPG'},
    ],
      searchKey: "",
      liked: [],
      cart: []
    }
  },
  /* computed: {
    filtrationList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get("like"));
      cookieValue == null ? (this.liked = []) : this.liked == cookieValue;
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
    },
  },
  methods: {
    setLikeCookie() {
      document.addEventListener("input", () => {
        setTimeout(() => {
          $cookies.set("like", JSON.stringify(this.liked));
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
  mounted: () => {
    this.getLikeCookie;
  }  */
}
</script>
