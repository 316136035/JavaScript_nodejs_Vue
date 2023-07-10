<template>
  <div class="school">
    <div>{{ Uberwachen }}</div>
    <div>{{ Petition }}</div>
    <button @click="showPetition"></button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      Uberwachen: "督查办公室",
      Petition: "信访办公室",
    };
  },
  methods: {
    showPetition() {
      alert(this.Uberwachen);
    },
  },
};
</script >

<style>
.school {
  background-color: blue;
}
</style>