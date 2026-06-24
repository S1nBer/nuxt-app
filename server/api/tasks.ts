const tasks = [
  { id: 1, title: "Изучить Nuxt", done: true },
  { id: 2, title: "Написать API", done: false },
  { id: 3, title: "Выучить SSR", done: false },
];

export default defineEventHandler(() => {
  // То, что вернём, автоматически закодируется в JSON
  return tasks;
});
