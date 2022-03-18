<template>
  <div>
    <v-flex xs11 sm6 md4 lg3 class="mx-auto">
      <v-form ref="form">
        <v-card class="pa-5 mt-12 text-center" flat>
          <v-img src="../assets/img/logo-with-text.svg" width="150" class="mx-auto" />
          <v-card-subtitle class="mt-4 font-weight-medium grey--text">
            <h2>
              Sign in
            </h2>     
          </v-card-subtitle>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            placeholder="Email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
            placeholder="Password"
          ></v-text-field>

          <v-btn
            class="mr-4"
            @click="submit"
            color="primary"
            block
            large
          >
            Sign in
          </v-btn>

          <v-flex class="my-4">
            <v-row>
              <v-col class="pr-0" style="align-self: center;">
                <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider" style="color:rgba(0, 0, 0, 0.30);" />
              </v-col>
              <v-col class="px-0" cols="auto">
                <span class="text-overline mx-1" style="color:rgba(0, 0, 0, 0.50);font-family: Heebo,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif!important;">
                  OR SIGN IN WITH
                </span>
              </v-col>
              <v-col class="pl-0" style="align-self: center;">
                <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider" style="color:rgba(0, 0, 0, 0.30);" />
              </v-col>
            </v-row>
          </v-flex>

          <v-flex class="mb-4">
            <v-row>
              <v-col>
                <v-btn
                  block
                  outlined
                  large
                  color="primary"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  block
                  outlined
                  large
                  color="primary"
                >
                  <v-icon>mdi-google</v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  block
                  outlined
                  large
                  color="primary"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-flex>
          

          <a href="/login">Forgot password?</a>
        </v-card> 
      </v-form>
    </v-flex>
     
    <div class="mx-auto mt-6 text-center" style="width:500">
      <span class="grey--text">Don't have an account? </span>
      <a href="/register">Create one here</a>
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import router from '../router/index'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      email: '',
      checkbox: false,
      show1: false,
      show2: false,
      password: '',
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        },
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        if(this.$refs.form.validate())
          router.push("/")
      },
    },
  }
</script>
