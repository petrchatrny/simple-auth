<template>
  <div class="dragon">
    <img :src="dragon.image" alt="dragon"/>
    <div class="label">
      <h2>{{ dragon.name }}</h2>
      <div class="values">
        <span><i class="fa fa-heart" title="health"></i> {{ dragon.health }}</span>
        <span><i class="fa fa-fire" title="damage"></i> {{ dragon.damage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragonComponent",
  props: {
    dragon: Object
  }
}
</script>

<style scoped>
.dragon {
  width: 30%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 250px;
  height: 250px;
  border-radius: 200px;
  position: relative;
  top: -25px;
}

.label {
  margin-bottom: 20px;
}

h2 {
  text-align: center;
}

.values {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 25px;
  font-size: 20px;
}
</style>