<template>
  <div>
    <Navbar/>
    <section 
      id="loop" 
      class="section has-text-light">
      <div class="container">
        <div class="columns is-multiline">
          <div 
            v-for="item in articles" 
            :key="item.id" 
            class="column is-4">
            <Card                
              :image="item.artikelImage" 
              :title="item.artikelName" 
              :link="'../'+item.id"
            />
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Logo from '@/components/Logo'
import Card from '@/components/Card'
import { fireDb } from '@/plugins/firebase.js'
export default {
  name: 'HomePage',
  components: { Navbar, Logo, Card },
  data() {
    return {}
  },
  async asyncData({ app, params, error }) {
    let artikelCollection = []
    let artikel = await fireDb
      .collection('artikel')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          artikelCollection.push(doc.data().data)
        })
      })

    return {
      articles: artikelCollection
    }
  }
}
</script>

<style scoped>
#loop {
  background-color: #151515;
  padding-top: 1.5em;
}
</style>
