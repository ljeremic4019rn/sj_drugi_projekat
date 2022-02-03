<template>
  <div>
    <SingleFaculty v-if="faculty" :faculty="faculty" />
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SingleFaculty from "@/components/SingleFaculty";
export default {
  name: "SingleFacultyView",
  components: {
    SingleFaculty
  },
  // data(){
  //   return {
  //   }
  // },

  computed: {
    ...mapState([
      'faculty'
    ])
  },
  methods: {
    ...mapActions([
      'fetchFacultyByID'
    ])
  },
  mounted() {
    this.fetchFacultyByID(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>