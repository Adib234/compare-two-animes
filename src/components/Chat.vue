<template>
  <section class="content">
    <div class="container2 has-text-centered is-size-2">Anime Title Chat</div>
    <div class="hero is-fullheight">
      <div class="columns">
        <div class="column is-one-fifth">is-four-fifths</div>
        <div class="column">
          <div class="messages"></div>
          <div class="bottom">
            <input class="input" type="text" placeholder="Text input" />
            <button class="button">Send!</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container2 {
  border-bottom: 1px solid;
}
.column {
  border-right: 1px solid;
}
.columns {
  margin-top: 0;
  min-height: inherit;
}

.hero.is-fullheight {
  min-height: 91vh;
  align-items: stretch;
  display: flex;
  flex-direction: column;
}
.footer {
  padding: 0;
}
.messages {
  min-height: 82vh;
}
.input {
  margin-left: 1rem;
  margin-right: 2rem;
}
.bottom {
  display: flex;
  margin-right: 1rem;
}
</style>
