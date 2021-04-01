<template>
    <div>
        <v-dialog v-model="dialog" width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            rounded
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Create new todo
            </v-btn>
        </template>
                <v-card>
                    <v-card-title>
                        <h2> Add a New Todo </h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form class="px-3">
                            <v-text-field label="Title" v-model="title"></v-text-field>

                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date"
                                    label="Due date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="date"
                                no-title
                                scrollable
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                            <v-btn color="primary"
                            @click="addTodo"
                            @keyup.enter="addTodo"
                            :loading="loading">Add Todo</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            <!-- </v-flex> -->
      </v-dialog>
    </div>
</template>

<script>
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import database from '../fb';

export default {
  data() {
    return {
      title: '',
      dialog: false,
      date: null,
      menu: false,
      loading: false,
      completed: false,
    };
  },
  methods: {
    async addTodo() {
      this.loading = true;
      const todo = {
        title: this.title,
        date: this.date,
        // status: 'ongoing',
      };
      database.collection('todos').add(todo).then(() => {
        console.log('todo is added to database');
        this.loading = false;
        this.dialog = false;
        this.$emit('todoAdded');
      });
    // async addItem() {
    //   if (this.newItem) {
    //     await db.collection("ToDos").add({ name: this.newItem });
    //     this.newItem = "";
    //   }
    },
    // firestore: {
    //   todos: database.collection('todos'),
    // },
  },
};
</script>
