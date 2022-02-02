import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    faculties: [],
    books: [],
    book: null,
    libraries: [],
    selectedBooks: []
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    setFaculties(state, faculties) {
      state.faculties = faculties;
    },

    setBooks(state, books) {
      state.books = books;
    },

    setLibraries(state, libraries) {
      state.libraries = libraries;
    },

    setBookById(state, book) {
      state.book = book;
    },

    selectBooks(state, int) {
      state.selectedBooks = []
      state.books.forEach(element => {
        if (element.libraryId === int){
          console.log(element)//todo skloni
          state.selectedBooks.push(element);
        }
      });
      console.log(state.selectedBooks)
    }

  },

  actions: {
    register({ commit }, obj) {
      console.log(obj)
      fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)//todo skloni kasnije
              commit('setToken', tkn.token)
            }
          });
    },

    login({ commit }, obj) {
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)//todo skloni kasnije
              commit('setToken', tkn.token)
            }
          });
    },

    fetchFacutlies({ commit }, obj){
      fetch('http://127.0.0.1:8500/admin/faculty/all',{
        headers: {
            'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
    })
        .then( obj => obj.json() )
        .then( res => commit('setFaculties', res));
    },

    fetchBooks({ commit }, obj){
      fetch('http://127.0.0.1:8500/admin/book/all',{
        headers: {
            'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
    })
        .then( obj => obj.json() )
        .then( res => commit('setBooks', res));
    },
    fetchLibraries({ commit }, obj){
      fetch('http://127.0.0.1:8500/admin/library/all',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setLibraries', res));
    },

    getBooksByLibId({ commit }, int){//todo nece iz prve da pokupi knjige nego mora dva puta da se kativira, saznaj zasto
      fetch('http://127.0.0.1:8500/admin/book/all',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setBooks', res));

      console.log("napunjene knjige opet")
      commit('selectBooks',int)
    },

    fetchBookByID({ commit }, id){
      fetch(`http://127.0.0.1:8500/admin/book/${id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setBookById', res) );

    }
    
  },

  modules: {
  }
})
