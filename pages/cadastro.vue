<template>
    <div>
      <form @submit.prevent="addTask">
        <input type="text" v-model="tarefa" placeholder="Tarefa" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tarefa: '',
      };
    },
    methods: {
      addTask() {
        this.$emit('addTask', { texto: this.tarefa, status: 'Pendente' });
        this.tarefa = '';
      },
    },
  };
  </script>
  