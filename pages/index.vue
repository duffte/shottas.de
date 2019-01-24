<template>
  <section>
    <no-ssr>
      <div 
        v-masonry 
        transition-duration=".25s" 
        item-selector=".item" 
        class="masonry-container">
        <div 
          v-masonry-tile 
          v-for="(item, index) in articles" 
          :key="index" 
          class="item">
          <Card 
            :item="item" 
          />
        </div>
      </div>
    </no-ssr>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Logo from '@/components/Logo'
import Card from '@/components/Card'
import TextCard from '@/components/TextCard'
import { fireDb } from '@/plugins/firebase.js'
export default {
  name: 'HomePage',
  components: { Navbar, Logo, Card, TextCard },
  data() {
    return {
      image: '~/assets/shottas_b.svg'
    }
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
.hero {
  background-color: #5800e1;
  color: #fff598 !important;
}
#loop {
  background-color: #5800e1;
}
.has-text-primary {
  color: #fff598 !important;
}
.item {
  width: 50%;
  height: 50vh;
}
</style>
