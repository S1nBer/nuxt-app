<template>
  <div>
    <h1>Главная страница</h1>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} — {{ task.done ? "✅" : "❌" }}
      </li>
    </ul>

    <NuxtLink to="/about">О проекте</NuxtLink>
  </div>
</template>

<script setup>
const { data: tasks } = await useAsyncData("tasks", () => $fetch("/api/tasks"));
</script>
