<template>
  <section class="hero is-fullheight is-dark">
    <div class="container">
      <div class="columns">
        <div class="column is-6 box">  
          <h2 class="title">Registrieren</h2>  
          <button 
            class="button is-fullwidth" 
            @click="googleSignUp">Google</button>
          <button 
            class="button is-fullwidth" 
            @click="facebookSignUp">Facebook</button>
            
          <div class="sign-up">
            <div class="control">
              <input 
                v-model="email" 
                class="input is-fullwidth" 
                type="text" 
                placeholder="Email">
            </div>
            <div class="control">
              <input 
                v-model="password" 
                class="input is-fullwidth" 
                type="password" 
                placeholder="Password">
            </div>                
            <button 
              class="button is-fullwidth is-primary" 
              @click="signUp">Anmelden</button>
          </div>
        </div> 
        <div class="column is-6 box">  
          <h2 class="title">Anmelden</h2>    
          <button 
            class="button is-fullwidth" 
            @click="googleSignUp">Google</button>
          <button 
            class="button is-fullwidth" 
            @click="facebookSignUp">Facebook</button>

          <div class="login">
            <div class="control">
              <input 
                v-model="loginemail" 
                class="input is-fullwidth" 
                type="text" 
                placeholder="Email">
            </div>
            <div class="control">
              <input 
                v-model="loginpassword" 
                class="input is-fullwidth" 
                type="password" 
                placeholder="Password">
            </div>
            <button 
              class="button is-fullwidth is-primary" 
              @click="login">Einloggen</button>
          </div>
          <button 
            class="button is-warning" 
            @click="resetPassword">Reset Password</button>
        </div>
      </div>
    </div>
  </section>
</template>

 <script>
import firebase, { fireauth } from '@/plugins/firebase.js'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loginemail: '',
      loginpassword: ''
    }
  },
  methods: {
    googleSignUp() {
      this.$store
        .dispatch('signInWithGoogle')
        .then(() => {
          this.$store.commit('isLoading', true)
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    facebookSignUp() {
      this.$store
        .then(() => {
          this.$store.dispatch('signInWithFacebook')
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    login: function() {
      fireauth
        .signInWithEmailAndPassword(this.loginemail, this.loginpassword)
        .then(() => {
          this.$store.commit('isLoading', true)
        })
        .then(
          user => {
            this.$router.replace('/')
          },
          err => {
            alert('Oops. ' + err.message)
          }
        )
    },
    signUp: function() {
      fireauth.createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.replace('/')
        },
        err => {
          alert('Oops. ' + err.message)
        }
      )
    },
    resetPassword() {
      fireauth
        .sendPasswordResetEmail(this.resetEmail)
        .then(function() {
          // Email sent.
        })
        .catch(function(error) {
          // An error happened.
        })
    }
  }
}
</script>

 <style scoped>
</style>
