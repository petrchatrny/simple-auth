<template>
  <h1>User</h1>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>