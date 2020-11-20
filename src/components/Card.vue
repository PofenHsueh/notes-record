<template>
  <div @click="$emit('click')" class="note">
    <div class="note--shape">
      <h5>{{ title }}</h5>
      <hr />
      <h6>this is content</h6>
      <p>{{ date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  computed: {
    date() {
      var days = new Date();
      let dates =
        days.getFullYear() + "/" + days.getMonth() + "/" + days.getDate();
      return dates;
    }
  }
};
</script>
<style lang="scss" scoped>
//便條紙摺角功能
.note {
  margin: 0px 32px;
  &--shape {
    margin: 10px 0px;
    position: relative;
    height: 255px;
    padding: 35px 25px;
    background: linear-gradient(-150deg, transparent 1.5em, white 0);
    border-radius: 0.5em;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(
          to left bottom,
          transparent 50%,
          rgba(0, 0, 0, 0.2) 0,
          rgba(0, 0, 0, 0.4)
        )
        no-repeat 100% 0;
      width: 1.73em;
      height: 3em;
      transform: translateY(-1.3em) rotate(-30deg);
      transform-origin: bottom right;
      border-bottom-left-radius: inherit;
      box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
    }
    p {
      position: absolute;
      bottom: 0;
      right: 25px;
    }
  }
}
</style>
