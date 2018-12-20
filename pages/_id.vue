<template>
  <div class="has-background-white">
    <NavbarSingle 
      :title="data.data.artikelName" 
      :image="data.data.artikelImage"
      :autor="data.data.artikelAuthor"
      :date="theDate"
      :timetoread="data.data.timeToRead"/>
    <section 
      class="section">
      <div class="container">                 
        <section 
          id="blocks" 
          class="content">                      
          <div 
            v-for="(item) in data.blocks" 
            :key="item.id" 
            class="block columns">                          
            <figure 
              v-if="item.type == 'image'" 
              class="figure column is-10 is-offset-1 block-image">
              <img :src="item.src">
              <figcaption>{{ item.caption }}</figcaption>
            </figure>
            <div 
              v-else-if="item.type == 'text'" 
              class="column is-8 is-offset-2 block-text" 
              v-html="$md.render(item.content)"/>                
          </div>
        </section>              
      </div>
    </section>
    <section 
      :v-if="related" 
      class="section has-text-centered">
      Mehr Stories
      <TextCard 
        v-for="item in related"
        :key="item.id" 
        :image="item.artikelImage" 
        :title="item.artikelName" 
        :link="'../'+item.id"/>
    </section>
  </div>
</template>

<script>
import TextCard from '@/components/TextCard'
import { fireDb } from '~/plugins/firebase.js'
import NavbarSingle from '@/components/NavbarSingle.vue'
export default {
  components: { NavbarSingle, TextCard },
  head() {
    return {
      title: this.data.data.artikelName,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.data.data.artikelShort
        },
        //facebook
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: this.data.data.artikelName
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.data.data.artikelShort
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.data.data.artikelImage
        },
        //twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@supphero' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.data.data.artikelName
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.data.data.artikelShort
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.data.data.artikelImage
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.data.data.artikelName
        }
      ]
    }
  },
  scrollToTop: true,
  data() {
    return {
      data: null,
      related: null,
      image: '@/assets/shottas_b.svg'
    }
  },
  async asyncData({ app, params, error }) {
    let news = await fireDb
      .collection('artikel')
      .doc(params.id)
      .get()

    var related = []
    let rel = await fireDb
      .collection('artikel')
      .limit(3)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          related.push(doc.data().data)
        })
      })

    if (news.data()) {
      return {
        data: news.data(),
        related: related
      }
    } else {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  computed: {
    theDate: function() {
      var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      }
      var date = new Date(
        this.data.data.artikelDate.seconds * 1000
      ).toLocaleDateString('de-DE', options)
      return date
    }
  }
}
</script>

<style scoped>
.block {
  display: block;
}
.block-text {
  max-width: 512px;
  margin: auto;
}
.has-background-dark {
  background-color: #151515 !important;
}
.block:first-child {
  margin-top: 1.5em;
}
.block:last-child {
  margin-bottom: 4.5em;
}
.content {
  font-size: 21px;
}
img {
  width: 100%;
}
figure {
  margin: 2em 0;
}
#newsblocks .block:first-child p:first-child:first-letter {
  float: left;
  font-size: 55px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}
header .columns .column:first-child {
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
