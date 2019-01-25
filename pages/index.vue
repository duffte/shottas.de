<template>
  <section>
    <no-ssr>
      <div>
        <div 
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
import { fireDb } from '@/plugins/firebase.js'
export default {
  name: 'HomePage',
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Logo: () => import('@/components/Logo.vue'),
    Card: () => import('@/components/Card.vue'),
    TextCard: () => import('@/components/TextCard.vue')
  },
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
