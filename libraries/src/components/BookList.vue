<template>
 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="filteredBooks.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="filteredBooks"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="filteredBooks.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
   <b-button to="/addbook">Donate</b-button>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "FacultyList",

    data() {
      return {
        fields: ['name', 'writer', 'genre', 'desciption', 'relesedate', 'publisher', 'userId'],
        items: [],
        currentPage: 1,
        perPage: 10,
      }
    },

    mounted() {

    },


    computed: {
      ...mapState([
        'books',
      ]),
      filteredBooks: function () {
        let sb = []
        console.log()
        return this.books.filter(book => book.libraryId == this.$route.params.id); //mora da bude == umesto ===, jer inace nece da ih nadje kada se uradi drugi put
      }
    },

    methods: {
      rowClicked(record, index) {
        this.$router.push({ name: 'Book', params: { id: record.id} });
      }
    }


  }
</script>


<style scoped>


</style>