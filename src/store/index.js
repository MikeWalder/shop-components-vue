import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, description: "Quarz Luxe", price: 12, img: 'img/quarz-luxe.jpg', likedItem: false},
      { id: 2, description: 'Curren Business', price: 20, img: 'img/curren-business.JPG', likedItem: false},
      { id: 3, description: 'Curren Sport', price: 5, img: 'img/curren-sport.JPG', likedItem: false},
      { id: 4, description: 'Jaragar Racing', price: 8, img: 'img/jaragar-racing.JPG', likedItem: false},
      { id: 5, description: 'Liges Hommes', price: 3, img: 'img/liges-hommes.JPG', likedItem: false},
      { id: 6, description: 'Maserati Mechanical', price: 65, img: 'img/maserati-mechanical.JPG', likedItem: false},
      { id: 7, description: 'Montre Mecanique', price: 25, img: 'img/montre-mecanique.JPG', likedItem: false},
      { id: 8, description: 'Brand Designer', price: 28, img: 'img/brand-designer.JPG', likedItem: false},
      { id: 9, description: 'Relogio Masculino', price: 4, img: 'img/relogio-masculino.JPG', likedItem: false},
      { id: 10, description: 'Tissot Multifunction', price: 29, img: 'img/tissot-multifunction.JPG', likedItem: false},
      { id: 11, description: 'Hip Hop Gold', price: 87, img: 'img/hiphop-gold.JPG', likedItem: false},
      { id: 12, description: 'Mesh Genova', price: 6, img: 'img/mesh-genova.JPG', likedItem: false},
    ], 
    cart: [],
    liked: []
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getCart(state) {
      return state.cart
    },
    getLiked(state) {
      return state.liked
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
