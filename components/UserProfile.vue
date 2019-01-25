<template>  
  <nuxt-link 
    v-if="user" 
    class="navbar-item" 
    to="../account">
    <figure class="image is-24x24">
      <img 
        :src="user.photoURL" 
        class="is-rounded">
    </figure>
    
    <button 
      class="button is-danger" 
      @click="logout">
      Logout
    </button>      
  </nuxt-link>
  <div 
    v-else 
    class="navbar-item">
    <div v-if="isLoading">
      loading..
    </div>
    <nuxt-link 
      v-else
      to="../login" 
      class="button is-dark">
      Login
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase, { fireauth } from '@/plugins/firebase'
export default {
  computed: mapState(['user', 'isLoading']),
  methods: {
    logout() {
      fireauth.signOut().then(() => {
        this.$router.push('/')
        this.$store.commit('setUser', null)
      })
    }
  }
}
</script>

<style lang="css">
</style>
