<template>
  <div class="body">
    <img src="../assets/dragon.svg" alt="dragon">
    <div class="home-text">
      <h1>Website about epic dragons</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Aenean fermentum risus id tortor.
        Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nullam rhoncus aliquam metus. Integer tempor.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Integer tempor.
        Quisque tincidunt scelerisque libero. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.
        Suspendisse nisl. Maecenas lorem. Integer in sapien.</p>

      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Etiam dui sem, fermentum vitae,
        sagittis id, malesuada in, quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nullam lectus justo,
        vulputate eget mollis sed, tempor sed magna. Fusce aliquam vestibulum ipsum. Aliquam id dolor. Nullam dapibus
        fermentum ipsum. Mauris metus. Fusce aliquam vestibulum ipsum. Aenean id metus id velit ullamcorper pulvinar.
        Etiam neque. Maecenas sollicitudin. Curabitur sagittis hendrerit ante. In enim a arcu imperdiet malesuada. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

      <router-link to="/dragons">
        <button class="button">Show me</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
.body {
  margin: 25px;
  display: flex;
  flex-direction: row;
  gap: 35px;
}

.home-text {
  margin-top: 20px;
}

p {
  color: #5e5e5e;
  font-size: 20px;
  margin: 12px 0;
}

.button {
  color: white;
  background-color: #00AA48;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  border-radius: 25px;
  border: 0;
  padding: 12px;
  margin-top: 20px;
  letter-spacing: 2px;
  cursor: pointer;
}
</style>