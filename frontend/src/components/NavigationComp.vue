<template>
  <nav>
    <div class="nav-group">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="logo">
      </router-link>
      <router-link to="/">
        <div class="logo">Epic dragons</div>
      </router-link>
    </div>
    <div class="nav-group" v-if="!user">
      <router-link to="/login">
        <div class="login">Login</div>
      </router-link>
      <router-link to="/register">
        <div class="register">Register</div>
      </router-link>
    </div>
    <div class="nav-group" v-if="user">
      <router-link to="/user">
        <div class="login">{{ user.username }}</div>
      </router-link>
      <div @click="logout" class="register">Log out</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationComp",
  methods: {
    logout() {

    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 80px;
  background-color: white;
}

img {
  width: 65px;
}

.nav-group {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}

nav a {
  text-decoration: none;
}

.logo {
  font-family: Poppins, serif;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #00AA48;
}

.register, .login {
  text-transform: uppercase;
  font-family: Poppins, serif;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
}

.login {
  color: rgba(114, 111, 111, 0.67);
}

.register {
  color: white;
  background-color: #00AA48;
  padding: 9px;
  border-radius: 25px;
}
</style>