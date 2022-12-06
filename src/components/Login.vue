<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="mt-5">Login</h1>
        <hr />

        <form-tag>
          <text-input
            label="Email"
            type="email"
            name="email"
            required="true"
          ></text-input>

          <text-input
            label="Password"
            type="password"
            name="password"
            required="true"
          ></text-input>

          <hr />
          <input type="submit" value="Login" class="btn btn-primary" />
        </form-tag>
      </div>
    </div>
  </div>
</template>

<script>
import FormTag from "./forms/FormTag.vue";
import TextInput from "./forms/TextInput.vue";
export default {
  name: "login",
  components: {
    TextInput,
    FormTag,
  },
  mounted() {
    (() => {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  },
};
</script>
