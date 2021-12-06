<template>
  <div class="shopping">
    <h1 class="pt-md-3">Panier</h1>
    <div class="h4 text-center" :key="id">
      <div class="btn btn-success">
        Données
        
      </div>
      <p>Le total est de {{totalVueX}}</p>
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
    //totalVueX() {
      //return this.$store.state.totalFromVueX;
    //}
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