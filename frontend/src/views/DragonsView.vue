<template>
  <h1>Dragons</h1>
  <div class="dragons">
    <DragonComponent v-for="dragon in dragons"
                     :key="dragon._id"
                     :dragon="dragon"/>
  </div>
</template>

<script>
import Api from "@/services/api";
import DragonComponent from "@/components/DragonComponent";

export default {
  name: "DragonsView",
  components: {DragonComponent},
  data() {
    return {
      dragons: []
    }
  },
  mounted() {
    Api.get("/dragons")
        .then((res) => {
          this.dragons = res.data.data;
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error("Couldn't fetch dragons.", {position: "bottom-left", duration: 1000});
        });
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 30px 0 60px 0;
}

.dragons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}
</style>