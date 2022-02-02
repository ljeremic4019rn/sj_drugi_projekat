<template>
  <div>
        <SingleBook v-if="book" :book="book" />
<!--    <p>{{this.book}}</p>-->
<!--    <SingleBook />-->
  </div>
</template>

<script>
import SingleBook from "@/components/SingleBook";
import {mapActions, mapState} from "vuex";
export default {
  name: "SingleBookView",
  components: {
    SingleBook
  },
  // data(){
  //   return {
  //   }
  // },

  computed: {
    ...mapState([
      'book'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBookByID'
    ])
  },
  mounted() {
    this.fetchBookByID(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>