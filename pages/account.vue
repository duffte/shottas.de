<template>
  <div v-if="user">
    <BaseHero
      :title="'Hallo, '+user.displayName"
      subtitle=""
    />
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-8 is-offset-2 box">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input 
                  :value="user.displayName" 
                  class="input" 
                  type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Picture</label>
              <img 
                :src="user.photoURL" 
                :alt="user.displayName">
              <div class="control">
                <input 
                  :value="user.photoURL" 
                  class="input" 
                  type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">E-Mail</label>
              <div class="control">
                <input 
                  :value="user.email" 
                  class="input" 
                  type="text">
              </div>
            </div>
            <div 
              v-if="user.providerData[0].providerId" 
              class="field">
              Du hast Dich mit <span class="tag is-primary">{{ user.providerData[0].providerId }}</span> angemeldet!
            </div>
            <div v-else>
              <label class="label">Old Password</label>
              <div class="control">
                <input 
                  class="input" 
                  type="password">
              </div>
              <label class="label">New Password</label>
              <div class="control">
                <input 
                  class="input" 
                  type="password">
              </div>
            </div>
                    
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { fireauth } from '@/plugins/firebase.js'
export default {
  data() {
    return {}
  },
  computed: mapState(['user', 'isLoading']),
  methods: {
    updateProfile() {
      fireauth.currentUser
        .updateProfile({
          displayName: this.displayName,
          photoURL: this.photoURL
        })
        .then(function() {
          // Update successful.
        })
        .catch(function(error) {
          // An error happened.
        })
    },
    resendVerificationEmail() {
      fireauth.currentUser
        .sendEmailVerification()
        .then(function() {
          // Email sent.
        })
        .catch(function(error) {
          // An error happened.
        })
    },
    updatePassword() {
      fireauth.currentUser
        .updatePassword(this.newpassword)
        .then(function() {
          // Update successful.
        })
        .catch(function(error) {
          // An error happened.
        })
    }
  }
}
</script>

<style>
</style>
