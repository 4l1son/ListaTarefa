<template>
  <div>
    <cadastro @addTask="addTask" />
    <TabelaTarefas :tarefas="tarefas" />
  </div>
</template>

<script>
import TabelaTarefas from '../components/TabelaTarefa.vue';
import cadastro from './cadastro.vue';

export default {
  components: {
    TabelaTarefas,
    cadastro
  },
  data() {
    return {
      tarefas: [],
    };
  },
  methods: {
    addTask(tarefa) {
      this.tarefas.push(tarefa);
    },
  },
};
</script>
