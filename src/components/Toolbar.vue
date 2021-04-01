<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="green">
      <span>New todo has been added!</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat>
      <v-toolbar-title class="text-uppercase grey--text">
        <span clsss="font-weight-light"> My Todo </span>
      </v-toolbar-title>
      <!-- <v-flex>
        <Popup />
      </v-flex> -->
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class='hidden-xs-only' v-if="!userLogedIn"> -->
        <!-- <v-btn color = "primary" outlined
        v-for="item in items"
        :key="item.title" :to="item.link">
          <v-icon right>{{item.icon}}</v-icon> {{item.title}}
        </v-btn> -->
        <!-- <v-btn class="ma-1" color = "teal" outlined depressed to="/signup">Sign Up
        <v-icon right>mdi-account</v-icon>
        </v-btn>
        <v-btn class="ma-1" color = "primary" depressed rounded to="/login">Login
        <v-icon right>mdi-login</v-icon>
        </v-btn> -->
        <!-- <v-spacer></v-spacer> -->
      <!-- </v-toolbar-items> -->
      <!-- <v-toolbar-items class='hidden-xs-only' v-else> -->
        <v-btn class="hidden-xs-only" v-if="userLogedIn"
          text @click='logoutFromFirebase'
          >
          <span>Sign Out</span>
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      <!-- </v-toolbar-items> -->
    </v-toolbar>
  </nav>
</template>

<script>
// import Popup from './Popup.vue';

export default {
  // components: { Popup },
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    userLogedIn() {
      return this.$store.getters.user;
    },
  },
  methods: {
    logoutFromFirebase() {
      this.$store.dispatch('signOutAction');
      this.$router.push('/');
    },
  },
};
</script>
