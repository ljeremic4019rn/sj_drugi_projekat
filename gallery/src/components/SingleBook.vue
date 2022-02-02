<template>
  <div>
    <p>{{this.book}}</p>

    <b-form-input v-model="asdfas" type="text" debounce="500"></b-form-input>
    <b-form-input v-model="value" type="text" debounce="500"></b-form-input>


    <b-button href="#" variant="primary">Do something</b-button>

  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "SingleBook",

  data(){
    return{
    }
  },

  computed: {
    ...mapState([
      'book'
    ])
  },


  props: {
  }
}
</script>

<style scoped>

</style>