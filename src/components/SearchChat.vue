<template>
  <section>
    <div class="container1">
      <div class="has-text-centered is-size-1">
        Which chat would you like to go to?
      </div>
      <div class="field1">
        <div class="control">
          <input
            class="input is-large"
            type="text"
            placeholder="Some anime you love"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container1 {
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
}
.field1 {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
