<template>
  <footer class="has-background-transparent">
    <div class="section">
      <div class="container">
        <div class="columns">          
          <div class="column is-8 is-offset-2 has-text-centered has-text-dark">
            <div class="block">
              <b-icon 
                icon="copyright"
                size="is-small"/>
              <img 
                src="@/assets/shottas_b.svg" 
                alt="shottas"
                class="footer-logo"> 201x
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.has-background-transparent {
  background: #ffffff00;
}
footer {
  padding: 0 2em;
  margin-top: 1em;
}
footer .column:first-child {
  display: flex;
  flex-direction: column;
  align-self: center;
}
footer a {
  color: #888;
}
footer a:hover {
  color: #f0f0f0;
}
.block {
  display: inline-block;
}
.footer-logo {
  margin-top: 5px;
  width: 50px;
}
</style>
