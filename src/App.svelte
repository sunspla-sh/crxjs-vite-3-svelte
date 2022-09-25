<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  
  <h1>Login</h1>
  <form>
    <div class="form-input">
      <label for="email">Email</label>
      <input type="email" name="email" id="email">
    </div>
    <div class="form-input">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">
    </div>
    <div>
      <button>
        Log In
      </button>
    </div>
  </form>

</main>

<style>
  .form-input{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
