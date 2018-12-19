<template>
  <footer class="has-background-dark has-text-dark">
    <div class="section">
      <div class="container">
        <div class="columns">          
          <div class="column is-8 is-offset-2 has-text-centered has-text-light">
            <div class="block">
              <b-icon 
                icon="copyright"
                size="is-small"/>
              <img 
                src="@/assets/shottas_w.svg" 
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
