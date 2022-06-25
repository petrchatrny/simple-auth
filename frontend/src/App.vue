<template>
  <NavigationComp/>
  <router-view/>
</template>

<script>

import NavigationComp from "@/components/NavigationComp";

export default {
  name: "App",
  components: {NavigationComp}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

#app {
  font-family: Poppins, serif;
}

#app button {
  font-family: Poppins, serif;
}
</style>
