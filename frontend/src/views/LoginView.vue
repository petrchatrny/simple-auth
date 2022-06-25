<template>
  <div class="view-body">
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <div class="form-part">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" placeholder="Email" required>
      </div>

      <div class="form-part">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" placeholder="Password" required>
      </div>

      <button class="form-button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.userLoggedIn;
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {email: this.email, password: this.password});
        if (this.isUserLoggedIn) {
          this.$toast.success("Authentication succeeded.", {position: "bottom-left", duration: 1000})
          await this.$router.push("/dragons");
        }
      } catch (err) {
        console.log(err);
        this.$toast.error(`Authentication failed! Error: ${err}`, {position: "bottom-left", duration: 1000});
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/form.css";

</style>