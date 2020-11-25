<template>
  <form>
    <div class="form-group">
      <input type="email" class="uneditable-input form-control"
      placeholder="Email" required>
    </div>
    <div class="form-group">
      <input type="password" class="uneditable-input form-control"
      placeholder="Κωδικός" required>
    </div>
    <div class="form-group">
      <input type="password" class="uneditable-input form-control"
      placeholder="Κωδικός" required>
      <small class="form-text text-muted">Τα στοιχεία θα είναι πάντα ασφαλής.</small>
    </div>
    <button type="submit" class="btn my-btn">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'SignUp',
};
</script>

<style scoped>

</style>
