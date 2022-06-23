<template>
  <li>
    <div>{{ task.name }} {{ index }}</div>
    <div>
      <slot> </slot>
    </div>
    <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
    <button @click="deleteTask(index)">X</button>
  </li>
</template>

<script>
export default {
  props: ["task", "index"],
};
</script>
