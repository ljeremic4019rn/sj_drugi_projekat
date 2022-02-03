<template>
  <div class="d-flex justify-content-center">
    <div class="row text-center">
      <b-card
          :title="book.name"
          :img-src= 'getUrl()'
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 300rem;"
          class="mb-2"
      >
        <h4>{{book.writer}}</h4>
        <h4>{{book.id}}</h4>
        <b-card-text>
          <p id="year">Release date: {{book.relesedate}}</p>
          <p>Genre: {{book.genre}}</p>
          <p>Description: {{book.desciption}}</p>
        </b-card-text>
        <b-button v-if="" pill>Edit your donation</b-button>
      </b-card>
    </div>
  </div>

</template>

<script>//todo dodaj funkcionalnost dugmeta
export default {
  name: "SingleBook",


  props: {
    book: Object
  },
  methods: {
    getUrl(){
      return `https://picsum.photos/600/300/?image=${this.book.id}`
    }
  }

}

</script>

<style scoped>

</style>