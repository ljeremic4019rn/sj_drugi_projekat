<template>
  <div>
    <SingleFaculty v-if="faculty" :faculty="faculty" />
    <p></p>
    <h2>Library within the faculty</h2>
    {{library[0]}}

    <SingleLibrary v-if="library[0]" :library="library[0]" />
<!--              <SingleBook v-if="book" :book="book" />-->

  </div>
</template>

<script>//todo dodaj dugme i borders
import {mapActions, mapState} from "vuex";
import SingleFaculty from "@/components/SingleFaculty";
import LibraryList from "@/components/LibraryList";
import SingleLibrary from "@/components/SingleLibrary";
export default {
  name: "SingleFacultyView",
  components: {
    SingleLibrary,
    SingleFaculty,
    LibraryList
  },

  computed: {
    ...mapState([
      'faculty',
      'libraries',
      // 'library'
    ]),
    library: function () {
      if (this.libraries){
        return this.libraries.filter(a => a.facultyId === this.$route.params.id);
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchFacultyByID',
      'fetchLibraries',
   //   'fetchLibraryByFacultyId'
    ]),

    // goToLib(){
    //   this.$router.push({ name: 'BookList', params: { id: library[0].id} });//todo proveri
    // }
  },

  mounted() {
    this.fetchFacultyByID(this.$route.params.id);
  //  this.fetchLibraryByFacultyId(this.$route.params.id);
    this.fetchLibraries();


  }
}
</script>

<style scoped>

</style>