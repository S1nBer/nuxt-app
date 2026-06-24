<template>
  <header>
    <nav>
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/about">О проекте</NuxtLink>
    </nav>
    <span>🔢 {{ count }}</span>
  </header>
</template>

<script setup>
const { count } = useCounter();
</script>
