<template>
  <div>
    <Navbar/>
    <section class="section has-text-light">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <Card 
              v-for="item in articles" 
              :image="item.artikelImage" 
              :title="item.artikelName" 
              :link="'../'+item.id"
              :key="item.id"/>
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
</style>
