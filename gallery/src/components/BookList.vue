<template>
 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="selectedBooks.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="selectedBooks"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
      <!-- <template #cell(isHighlight)="data">
        <b-icon v-if="data.value" icon="check-square" variant="success" scale="2"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="2"></b-icon>
      </template> -->
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="selectedBooks.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
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
        'selectedBooks'
      ])
    },

    methods: {
    //   ...mapActions([
    //     'getItem'
    //   ]),

      rowClicked(record, index) {
        this.$router.push({ name: 'Book', params: { id: record.id} });
        console.log("prikazi podatke o selektovanoj knjzi")
      }
    }


  }
</script>


<style scoped>


</style>