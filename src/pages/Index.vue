<template>
  <q-page padding>
    <ul>
      <li v-for="task in tasks">{{ task }}</li>
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
};
</script>
