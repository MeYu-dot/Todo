<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Sign in</h1>
                        <div class="text-center mt-4">
                          <v-btn @click="googleLogin" class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="Email"
                            v-model="email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            v-model="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="ma-4">
                        <v-btn @click="loginWithFirebase" :loading="loading"
                        rounded color="#63C3C5" dark>SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                        class="text-center display-2 teal--text text--accent-3">
                        Create Account</h1>
                        <v-form>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="email"
                            color="teal accent-3"
                          />

                          <v-text-field
                            v-model="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="confirmedPassword"
                            label="confirmedPassword"
                            name="confirmedPassword"
                            prepend-icon="mdi-lock"
                            type="password"
                            :rules="[comparePasswords]"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark
                        @click="registerWithFirebase" :loading="loading">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import firebase from 'firebase';

export default {
  data() {
    return {
      step: 1,
      email: '',
      password: '',
      confirmedPassword: '',
      loading: false,

    };
  },
  // methods: {
  //   signup() {
  //     this.$store.dispatch('signUserUp', { email: this.email, password: this.password });
  //   },
  methods: {
    // validate() {
    //   if (this.$refs.form.validate()) {
    //     this.snackbar = true;
    //     this.registerWithFirebase();
    //   }
    // },
    // reset() {
    //   this.$refs.form.reset();
    // },
    registerWithFirebase() {
      this.loading = true;
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('signUp', user);
      this.loading = false;
    },
    googleLogin() {
      this.$store.dispatch('googleSignInAction');
    },
    loginWithFirebase() {
      this.loading = true;
      console.log(this.email);
      console.log(this.password);
      const user = {
        email: this.email,
        password: this.password,
      };
      console.log(user);
      this.$store.dispatch('signIn', { email: this.email, password: this.password });
      console.log('success');
      this.loading = false;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/todo');
      }
    },
  },
};
</script>
