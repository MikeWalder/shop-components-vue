<template>
  <div class="shopping">
    <h1 class="pt-md-3">Panier</h1>

    <div v-if="cart.length > 0" class="container">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix unitaire</th>
            <th scope="col">Quantité</th>
            <th scope="col">Montant</th>
          </tr>
        </thead>
        <tbody class="size-lines-table">
          <tr v-for="car in cart" :key="car.id">
            <td class="img-fluid"><img :src=car.img :alt=car.description class=""></td>
            <td scope="row" class="font-weight-bold h4 align-middle">{{car.description}}</td>
            <td class="h4 align-middle">{{car.price}}€</td>
            <td class="h4 align-middle">{{car.quantity}}</td>
            <td class="h4 align-middle font-weight-bold">{{car.quantity * car.price}}€</td>
          </tr>
        </tbody>
        <tfoot class="">
          <tr class="bg-light">
            <td></td>
            <td></td>
            <td></td>
            <td class="h4 align-middle text-dark font-weight-bold">TOTAL</td>
            <td class="h4 align-middle text-dark font-weight-bold">{{totalAmountCart}}€</td>
          </tr>
          <tr class="bg-light">
            <td></td>
            <td></td>
            <td></td>
            <td colspan="2" class="h4 align-middle text-dark font-weight-bold">
              <div class="btn btn-info btn-lg">
                Payer &ensp;<i class="fas fa-credit-card"></i>
              </div>
            </td>
          </tr>
        </tfoot>

      </table>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ShoppingCart',

  data() {
    return {
      mess: "Hello"
    }
  },
  props: ['id', 'quantity'],
  computed: {
    produits() {
      //direct access
      //return this.$store.state.produits;

      //Getters
      return this.$store.getters.getProduits;
    },
    cart() {
      return this.$store.getters.getCart;
    },
    totalAmountCart() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].price * this.cart[item].quantity;
      }
      return total;
    },
  },
  methods: {
    afficheDatas() {
      console.log(this.id)
      let ada = JSON.stringify(document.cookie)
      return ada
    }
  }
}

</script>

<style scoped>
table img {
  height: 60px;
  padding: 0;
}
table td {
  padding: 0.5em;;
}
</style>