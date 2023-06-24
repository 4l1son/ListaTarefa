<template>
  <div>
    <v-data-table :headers="headers" :items="tarefas" item-key="texto">
      <template v-slot:item.actions="{ item }">
        <v-btn icon small @click="excluirTarefa(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn icon small @click="abrirFormulario(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <!-- Formulário de Edição -->
    <v-dialog v-model="formularioVisivel" persistent max-width="500px">
      <template v-slot:activator="{ on }"></template>
      <v-card>
        <v-card-title>Editar Tarefa</v-card-title>
        <v-card-text>
          <v-text-field v-model="tarefaEditada.status" label="Status da Tarefa"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="atualizarTarefa">Atualizar</v-btn>
          <v-btn color="secondary" @click="fecharFormulario">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    tarefas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      formularioVisivel: false,
      tarefaEditada: {
        status: ''
      },
      tarefaIndex: -1,
      headers: [
        { text: 'Tarefa', value: 'texto' },
        { text: 'Status', value: 'status' },
        { text: 'Ações', value: 'actions' }
      ]
    };
  },
  methods: {
    excluirTarefa(tarefa) {
      const index = this.tarefas.indexOf(tarefa);
      if (index !== -1) {
        this.tarefas.splice(index, 1);
      }
    },
    abrirFormulario(tarefa) {
      this.tarefaIndex = this.tarefas.indexOf(tarefa);
      this.tarefaEditada = { ...tarefa };
      this.formularioVisivel = true;
    },
    fecharFormulario() {
      this.formularioVisivel = false;
      this.tarefaIndex = -1;
      this.tarefaEditada = {
        nome: '',
        status: ''
      };
    },
    atualizarTarefa() {
      if (this.tarefaIndex !== -1) {
        this.tarefas.splice(this.tarefaIndex, 1, this.tarefaEditada);
        this.fecharFormulario();
      }
    }
  }
};
</script>
