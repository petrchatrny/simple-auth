<template>
  <div class="body">
    <h1>Register</h1>
    <form>
      <div class="form-part">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Username" required>
      </div>

      <div class="form-part">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" required>
      </div>

      <div class="form-part">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" required>
      </div>

      <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>
.body {
  margin: 35px;
  display: flex;
  flex-direction: column;
}
</style>