<script lang="ts">
  import '../app.css'
</script>

<div>
  <main>
    <slot />
  </main>

  <footer>
    by <a href="https://tofran.com">tofran</a>
    |
    <a href="https://github.com/tofran/aws-ses-smtp-credentials">source code</a>
  </footer>
</div>

<style>
  div {
    margin: 1em auto 1em auto;
    max-width: 800px;
  }

  main {
    background-color: rgb(30 41 59);
    border-radius: 2%;
    padding: 1em;
  }

  footer {
    font-size: small;
    text-align: right;
    opacity: 0.3;
    padding: 0.2em;
  }
</style>
