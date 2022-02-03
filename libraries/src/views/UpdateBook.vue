<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="Update book"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Book name:" label-for="bookname">
        <b-form-input id="bookname"  v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Writer:" label-for="writer">
        <b-form-input id="writer" v-model="form.writer" placeholder="Enter writer" required></b-form-input>
      </b-form-group>

      <b-form-group label="Genre:" label-for="genre">
        <b-form-input id="genre" v-model="form.genre"  placeholder="Enter genre" required></b-form-input>
      </b-form-group>

      <b-form-group label="Relesedate:" label-for="relesedate">
        <b-form-input id="relesedate" v-model="form.relesedate"  placeholder="Enter relesedate" required></b-form-input>
      </b-form-group>

      <b-form-group label="Desciption:" label-for="desciption">
        <b-form-input id="desciption" v-model="form.desciption" placeholder="Enter desciption" required></b-form-input>
      </b-form-group>

      <b-form-group label="Publisher:" label-for="publisher">
        <b-form-input id="publisher" v-model="form.publisher" placeholder="Enter publisher" required></b-form-input>
      </b-form-group>

      <b-form-group label="LibraryId:" label-for="libraryId">
        <b-form-input id="libraryId" v-model="form.libraryId" type = "number" placeholder="Enter libraryId" required></b-form-input>
      </b-form-group>

      <b-form-group label="UserId:" label-for="userId">
        <b-form-input id="userId" v-model="form.userId" type = "number" placeholder="Enter userId" required></b-form-input>
      </b-form-group>

      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
  <p v-else>You must be signed in to leave a comment</p>
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UpdateBook',

  components: {
    Header
  },

  props: {
    userObj: Object
  },

  data() {
    return {
      form: {
        id: '',
        name: '',
        writer: '',
        genre: '',
        desciption: '',
        relesedate: '',
        publisher: '',
        libraryId: '',
        userId: ''
      }
    }
  },


  computed: {
    ...mapState([
      'token',
      'bookInfo',
    ])
  },

  mounted() {
    this.form.id = this.bookInfo.id.toString(),
    this.form.name = this.bookInfo.name,
    this.form.writer= this.bookInfo.writer,
    this.form.genre= this.bookInfo.genre,
    this.form.desciption= this.bookInfo.desciption,
    this.form.relesedate= this.bookInfo.relesedate,
    this.form.publisher= this.bookInfo.publisher,
    this.form.libraryId= this.bookInfo.libraryId.toString(),
    this.form.userId= this.bookInfo.userId.toString()

  },

  methods: {
    ...mapActions([
      'updateBook'
    ]),

    onSubmit(e) {
      e.preventDefault();
      this.updateBook(this.form); //todo update book
      // this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style scoped>

</style>
