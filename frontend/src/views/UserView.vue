<template>
  <div class="view-body">
    <h1>User</h1>
    <span><i class="fa fa-user"></i>{{ user.username }}</span>
    <span><i class="fa fa-at"></i>{{ user.email }}</span>
    <span><i class="fa fa-calendar"></i>{{ parseDate(user.registrationDate) }}</span>
  </div>
</template>

<script>
export default {
  name: "UserView",
  methods: {
    parseDate(date) {
      return new Date(Date.parse(date)).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  },
  computed: {
    user() {
      this.parseDate(this.$store.state.user.registrationDate);
      return this.$store.state.user;
    }
  }
}
</script>

<style scoped>
.view-body {
  margin: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

span {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  font-size: 20px;
}
</style>