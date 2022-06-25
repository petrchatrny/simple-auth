<template>
  <div class="body">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="form-part">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" placeholder="Username" required>
      </div>

      <div class="form-part">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" placeholder="Email" required>
      </div>

      <div class="form-part">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" placeholder="Password" required>
      </div>

      <button>Register</button>
    </form>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },
  methods: {
    register() {
      Api.post("/users/register", {
        username: this.username,
        email: this.email,
        password: this.password
      })
          .then(() => {
            this.$toast.success("Registration succeeded!", {position: "bottom-left", duration: 1000});
            this.$router.push("/login")
          })
          .catch((err) => {
            console.log(err);
            this.$toast.error("Registration failed!", {position: "bottom-left", duration: 1000});
          })
    }
  }
}
</script>

<style scoped>
.body {
  margin: 35px;
  display: flex;
  flex-direction: column;
}
</style>