<template>
  <div id="nav">

    <nav class="navbar navbar-expand-lg navbar-light bg-light border border-bottom border-secondary">
      
      <div class="navbar-brand">
        <router-link to="/">
          <img src="../src/assets/logo.png">
        </router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">

          <li class="nav-item pl-5 pr-5">
            <div class="navbar-brand">
              <router-link to="/usersettings">
                <i class="fas fa-user-cog fa-lg"></i>
              </router-link>
            </div>
          </li>

          <li class="nav-item pl-5 pr-5">
            <div class="navbar-brand">
              <router-link to="/wishlist">
                <i class="fas fa-heart fa-lg"></i>
              </router-link>
            </div>
          </li>

          <li class="nav-item pl-5">
            <div class="navbar-brand">
              <router-link to="/contact">
                <i class="fas fa-mail-bulk fa-lg"></i>
              </router-link>
            </div>
          </li>

        </ul>
      </div>

      <div class="navbar-brand">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item pr-5">
            <div class="navbar-brand">
              <router-link to="/shopping">
                <i class="fas fa-shopping-cart fa-lg"></i>
              </router-link>
            </div>
          </li>
        </ul>
      </div>

    </nav>

  </div>
  <transition
  mode="out-in"
  enter-active-class="animate__animated animate__fadeInUp"
  leave-active-class="animate__animated animate__fadeOutDown">
  <router-view/>
  </transition>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar img {
  height: 50px;
}

i:hover, .navbar-brand img:hover {
  transform: scale(1.3);
  transition: all 0.4s;
}
</style>
