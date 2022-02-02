import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    faculties: [],
    books: []
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
    }
    
  },

  modules: {
  }
})
