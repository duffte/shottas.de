import Vuex from 'vuex'
import firebase, { fireauth } from '@/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      user: null,
      isLoading: true // authentification progress
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
      isLoading(state, payload) {
        state.isLoading = payload
      }
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    actions: {
      signInWithGoogle({ commit }) {
        fireauth
          .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          .then(() => {
            commit('isLoading', false)
          })
      },
      signInWithFacebook({ commit }) {
        fireauth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
      },
      signOut({ commit }) {
        fireauth
          .signOut()
          .then(() => {
            commit('setUser', null)
          })
          .catch(err => console.log(error))
      }
    }
  })
}

export default createStore

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value)
