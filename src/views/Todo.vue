<template>
  <v-app>
    <!-- <Toolbar /> -->
  <div class="todo">
    <v-container class = "my-5">
      <v-flex class="mt-4">
        <Popup />
      </v-flex>
      <v-col class="text-right">
          <v-btn small text color="grey" @click="sortBy('date')">
            <v-icon left small>mdi-alarm</v-icon>
            <span class="caption text-capitalize">By Due Date</span>
          </v-btn>
          <!-- <span>Sorty By Due Date</span> -->
        <!-- </v-tooltip> -->
      </v-col>
      <v-card class = "pa-3"
      v-for="todo in todos"
      :key="todo.id">
        <v-layout row wrap>
          <v-checkbox></v-checkbox>
          <v-flex>
            <div class = "caption grey--text">Title</div>
            <div>{{ todo.title }}</div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex>
            <div class="caption grey--text">Due date</div>
            <div>{{ todo.date }}</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Status</div>
            <div>{{ todo.status }}</div>
          </v-flex>
          <v-btn
            class="ma-2"
            outlined
            small
            fab
            color="indigo"
            @click="editTodo(todo)"
          >
        <v-icon>mdi-pencil</v-icon>
         </v-btn>
         <!-- <PopupEdit /> -->
         <v-btn
            id = "addSubtask"
            class="ma-2"
            outlined
            small
            fab
            color="indigo"
          >
        <v-icon>mdi-plus</v-icon>
         </v-btn>
        <v-btn icon color="red" @click="deleteTodo(todo.id)">
          <v-icon>mdi-delete</v-icon>
         </v-btn>
        </v-layout>
      </v-card>
    </v-container>
  </div>
  </v-app>
</template>
<script>
/* eslint-disable */
import Popup from '@/components/Popup.vue';
// import PopupEdit from '@/components/PopupEdit.vue';
// import Toolbar from '@/components/Toolbar.vue';
import database from '../fb';
// import ref from '../fb';

export default {
  components: { Popup },
  data() {
    return {
      dialog: false,
      todos: [],
      sortedBy: '',
      editing: null,
    };
  },
  // methods: {
  //   addTodo() {
  //     database.collection('todos').onSnapshot((res) => {
  //       const changes = res.docChanges();
  //       changes.forEach((change) => {
  //         if (change.type === 'added') {
  //           this.todos.push({
  //             ...change.doc.data(),
  //             id: change.doc.id,
  //           });
  //         }
  //       });
  //     });
  //   },
  // },
  methods: {
    deleteTodo(id) {
      // ref.child(id).remove();
      console.log('delete');
      database.collection('todos')
        .doc(id)
        .delete();
      // this.$store.dispatch('deleteTodo', id);
      // firebase.database().ref
    },
    sortBy(prop) {
      if (this.sortedBy === prop) {
        this.sortedBy = '';
        this.todos.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      } else {
        this.sortedBy = prop;
        this.todos.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
      }
    },
    // complete() {
    //   database.collection('todos')
    //     .doc(this.title)
    //     .update(this.status = )
    // },
    editTodo(todo) {
      this.editing = todo.id;
    },
  },
  created() {
    database.collection('todos').onSnapshot((res) => {
      const changes = res.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          this.todos.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
        if (change.type === 'removed') {
          const todosWithoutTheDeletedOne = this.todos
            .filter((todo) => todo.id !== change.doc.id);

          this.todos = todosWithoutTheDeletedOne;
        }
        // if (change.type === 'modified') {
        //   context
        // }
      });
    });
  },
};
</script>
