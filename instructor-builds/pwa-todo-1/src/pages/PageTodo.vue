<template>
  <q-page>
    <q-input
      v-model="newTask"
      placeholder="Add task"
      @keyup.enter="addTask"
      class="bg-cyan-8"
      dark
      filled
      square
    >
      <template v-slot:append>
        <q-btn @click="addTask" icon="add" round dense flat />
      </template>
    </q-input>

    <q-list bordered separator>
      <q-item v-for="task in tasks" :key="task.id" class="bg-cyan-1">
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
var qs = require("qs");

export default {
  name: "PageTodo",
  data() {
    return {
      newTask: "",
      tasks: [
        // {
        //   id: 1593467150887,
        //   title: 'Do this'
        // },
        // {
        //   id: 1593467166614,
        //   title: 'Do that'
        // }
      ],
    };
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTask,
      };

      // formData.append('id', newTask.id)
      // formData.append('title', newTask.title)

      let newTaskQS = qs.stringify(newTask);
      this.$axios.post(`${process.env.API}/createTask?${newTaskQS}`);

      this.tasks.push(newTask);
      this.newTask = "";
      // this.$q.loading.hide()
    },
    getTasks() {
      this.$q.loading.show();
      this.$axios.get(`${process.env.API}/tasks`).then((response) => {
        this.tasks = response.data;
        this.$q.loading.hide();
      });
    },
  },
  created() {
    this.getTasks();
  },
};
</script>
