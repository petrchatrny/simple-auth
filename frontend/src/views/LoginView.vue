<template>
  <div class="body">
    <h1>Login</h1>
    <form>
      <div class="form-part">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" required>
      </div>

      <div class="form-part">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" required>
      </div>

      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>
@import "../assets/form.css";

.body {
  margin: 35px;
  display: flex;
  flex-direction: column;
}

</style>