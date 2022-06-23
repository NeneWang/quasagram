<template>
  <q-page padding>
    <ul>
      <li v-for="task in tasks">
        <div>{{ task.name }}</div>
        <small>{{ task.dueDate }} @ {{task.dueTime}}</small>
        <button @click="deleteTask" >X</button>
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "Go to shop",
          dueDate: "2019/05/12",
          dueTime: "18:30",
        },
        {
          name: "Get Bananas",
          dueDate: "2019/05/13",
          dueTime: "14:00",
        },
        {
          name: "Get Apples",
          dueDate: "2019/05/14",
          dueTime: "16:00",
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
      // The 1 means that only 1 item will be deleted
    }
  }
};
</script>
