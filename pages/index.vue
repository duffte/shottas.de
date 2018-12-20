<template>
  <div>
    <Navbar/>
    <section 
      id="loop" 
      class="section has-text-light has-text-centered">
      <h2>Stories</h2>
      <TextCard  
        v-for="item in articles" 
        :key="item.id"               
        :image="item.artikelImage" 
        :title="item.artikelName" 
        :link="'../'+item.id"
      />

    </section>
    
  </div>
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
  head() {
    return {
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Foto- und Videodienstleistungsgesellschaftsunternehhaltdiefresse'
        },
        //facebook
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: 'Shottas.de - Get Shot'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Startseite'
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        //twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@supphero' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Shottas.de - Get Shot'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Startseite'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Shottas.de - Get Shot'
        }
      ]
    }
  },
  data() {
    return {
      image: '~/assets/shottas_w.svg'
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
  background-image: url('https://firebasestorage.googleapis.com/v0/b/shottas-24a2b.appspot.com/o/site%2Fshottas_pattern.svg?alt=media&token=c76cbd3d-a21b-44a6-bc03-b89a46a4c0be');
  background-repeat: repeat;
  background-size: 55px !important;
  background-color: #1e1e1e;
}
#loop {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/shottas-24a2b.appspot.com/o/site%2Fshottas_pattern.svg?alt=media&token=c76cbd3d-a21b-44a6-bc03-b89a46a4c0be');
  background-repeat: repeat;
  background-size: 55px !important;
  background-color: #1e1e1e;
  padding-top: 1.5em;
}
</style>
