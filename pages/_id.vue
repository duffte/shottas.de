<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <article>          

            <header class="column is-12 content">  
              <div class="columns">
                <div class="column is-6">
                  <h1>
                    {{ data.data.artikelName }}
                  </h1>                            
                  <p class="subtitle">
                    {{ data.data.artikelExcerpt }}
                  </p>
                  <span><b-icon
                    icon="calendar-range"
                    size="is-small"/> {{ theDate }} <b-icon
                      icon="timer"
                      size="is-small"/> Lesedauer: {{ data.data.timeToRead }} Minute(n)</span>
                  <hr>
                  <nuxt-link to="/autoren/">
                    <div class="author media">
                      <figure class="media-left">
                        <p class="image is-48x48">
                          <img 
                            :src="data.data.artikelAutor.autorImage" 
                            class="is-rounded authorImage">
                        </p>
                      </figure>
                      <div class="media-content">
                        <div class="content">
                          <span class="author-top">Geschrieben von</span>
                          <p class="author-name">{{ data.data.artikelAutor.autorName }}</p>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="column is-6">
                  <img 
                    :src="data.data.artikelImage" 
                    class="image">
                </div>
              </div>
            </header>
            <br>

            <section 
              id="blocks" 
              class="content">                      
              <div 
                v-for="(item) in data.blocks" 
                :key="item.id" 
                class="has-text-dark block">                          
                <figure 
                  v-if="item.type == 'image'" 
                  class="figure column is-10 is-offset-1">
                  <img :src="item.src">
                  <figcaption>{{ item.caption }}</figcaption>
                </figure>
                <div 
                  v-else-if="item.type == 'text'" 
                  class="column is-8 is-offset-2" 
                  v-html="$md.render(item.content)"/>                
              </div>
            </section>  
          </article>
        </div>               
      </div>
    </section>
    <section 
      :v-if="related" 
      class="section has-background-light">
      <div class="container">        
        <div class="columns">
          <BaseArticle 
            v-for="item in artikel" 
            :key="item.id" 
            :author="item.autor" 
            :image="item.artikelImage" 
            :title="item.artikelName" 
            :single-link="'../'+item.id"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'

export default {
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
