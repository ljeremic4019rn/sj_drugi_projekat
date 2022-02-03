<template>
  <div>
    <SingleFaculty v-if="faculty" :faculty="faculty" />
    <p></p>
    <h2>Library within the faculty</h2>
    <LibraryList />
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SingleFaculty from "@/components/SingleFaculty";
import LibraryList from "@/components/LibraryList";
export default {
  name: "SingleFacultyView",
  components: {
    SingleFaculty,
    LibraryList
  },

  computed: {
    ...mapState([
      'faculty'
    ])
  },
  methods: {
    ...mapActions([
      'fetchFacultyByID',
      'fetchLibraries'
    ])
  },
  mounted() {
    this.fetchFacultyByID(this.$route.params.id);
    this.fetchLibraries();
  }
}
</script>

<style scoped>
</style>