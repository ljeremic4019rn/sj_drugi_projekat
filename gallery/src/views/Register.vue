<template>
  <div id="app">
    <Header subtitle="Create account"/>

    <b-form @submit="onSubmit">

      <b-form-group label="First name:" label-for="first_name">
        <b-form-input id="first_name" v-model="form.firstname" placeholder="Enter first name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Last Name:" label-for="last_name">
        <b-form-input id="last_name" v-model="form.lastname" placeholder="Enter last name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Birthdate:" label-for="birth_date">
        <b-form-input id="birth_date" v-model="form.birthdate" type = "date" placeholder="Enter birthdate" required></b-form-input>
      </b-form-group>
      
      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Userame:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-form-group label="FacultyId:" label-for="facultyId">
        <b-form-input id="facultyId" v-model="form.facultyId" type = "number" placeholder="Enter facultyId" required></b-form-input>
      </b-form-group>

      <b-form-checkbox id="admin" v-model="form.admin" :value="true" :unchecked-value="false">Admin</b-form-checkbox>
      <b-form-checkbox id="moderator" v-model="form.moderator" :value="true" :unchecked-value="false">Moderator</b-form-checkbox>
      <b-form-checkbox id="student" v-model="form.student" :value="true" :unchecked-value="false">Student</b-form-checkbox>
      
      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Register',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
          email: '',//!promeni kasnije
          name: '',
          password: '',
          admin: false
        }
      }
    },

    methods: {
      ...mapActions([
        'register'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.register(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
