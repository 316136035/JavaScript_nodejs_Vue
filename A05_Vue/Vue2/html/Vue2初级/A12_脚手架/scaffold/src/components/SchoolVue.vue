<template>
  <div class="schoolVue">
    <div>{{ Uberwachen }}</div>
    <div>{{ Petition }}</div>
    <button @click="showPetition">获取Uberwachen</button>
  </div>
</template>

<script>
export default {
  name: "SchoolVue",
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
.schoolVue {
  background-color: blue;
}
</style>