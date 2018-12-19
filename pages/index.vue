<template>
  <div>
    <section class="section has-background-dark has-text-light">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Card from '@/components/Card'
export default {
  name: 'HomePage',
  components: { Logo, Card },
  data() {
    return {}
  }
}
</script>
