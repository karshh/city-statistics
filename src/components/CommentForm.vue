<template>
  <div id="form">
    <form>
      <div class="form-group">
        <label for="input0">Name</label>
        <input v-model="dataForm.name" type="text" class="form-control" id="input0" placeholder="name" />
      </div>
      <div class="form-group">
        <label for="input1">Email address</label>
        <input
          v-model="dataForm.email"
          type="email"
          class="form-control"
          id="input1"
          placeholder="name@example.com"
        />
      </div>
      <div class="form-group">
        <label for="input2">Example textarea</label>
        <textarea v-model="dataForm.body" class="form-control" id="input2" rows="3"></textarea>
      </div>
      <div class="form-group">
        <button
          @click="submitForm()"
          @click.prevent="validate()"
          type="submit"
          class="btn btn-primary mb-2"
        >Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  data() {
    return {
      dataForm: {
        name: "",
        email: "",
        body: ""
      }
    };
  },
  methods: {
    validate() {
      return false;
    },
    submitForm() {
      this.$emit('add-comment', this.dataForm);

      this.dataForm = {name: "", email: "",  body: ""}
    }
  }
};
</script>

<style>
</style>