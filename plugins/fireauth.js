import { fireauth } from '@/plugins/firebase.js'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    fireauth.onAuthStateChanged(user => {
      store.commit('setUser', user)
      store.commit('isLoading', false)
      resolve()
    })
  })
}
