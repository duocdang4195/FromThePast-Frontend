<template>
  <div class="signup">
    <h2 class="signup__title">
      SIGNUP
    </h2>
    <div class="signup__input">
      <v-text-field
        v-model="userName"
        label="USER NAME"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <v-text-field
        v-model="name"
        label="NAME"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <v-text-field
        v-model="email"
        label="EMAIL"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <v-text-field
        v-model="password"
        label="PASSWORD"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <v-text-field
        v-model="confirmPassword"
        label="CONFIRM PASSWORD"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <p>GENDER</p>
      <v-radio-group v-model="row" row>
        <v-radio v-model="male" label="Male" :value="false"></v-radio>
        <v-radio v-model="female" label="Femail" :value="false"></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      male: '',
      female: '',
    }
  }
}
</script>

<style lang="scss" scoped>
  .signup {
    background: #fff;
    width: 500px;
    margin: 0 auto;
    padding: 30px 60px;
    text-align: center;
    border-radius: 5px;
    &__title {
      font-size: 24px;
      margin-bottom: 10px;
    }
    &__input {
      p {
        text-align: left;
      }
    }
  }
</style>

