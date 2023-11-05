<template>
  <nav class="navbar bg-dark">
    <div class="container">
      <a href="/">
        <h2 class="text-white"><b>Atividade</b></h2>
      </a>
    </div>
  </nav>

  <div class="container text-center">
    <div class="row align-items-start">
      <h2 class="text-start pt-4 pb-4">Adicione as Informações</h2>
      <div class="col-md-6">
        <formAtividade @aluno-adicionado="adicionarAluno"> </formAtividade>
      </div>
      <div class="col-md-6">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">RGM</th>
              <th scope="col">Turma</th>
              <th scope="col">Nota1</th>
              <th scope="col">Nota2</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(aluno, index) in alunos" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ aluno.nome }}</td>
              <td>{{ aluno.rgm }}</td>
              <td>{{ aluno.turma }}</td>
              <td>{{ aluno.nota1 }}</td>
              <td>{{ aluno.nota2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div></div>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <a href="  https://github.com/carvalhopecanha/Atividade-Plano-de-Carreirar-SPI" target="_blank"
          >  <img src="../assets/img/gith.png" class="gith" alt="git"> Projeto no GitHub</a 
        >
      </div>
    </div>
  </div>
</template>

<script>
import formAtividade from "../components/form.vue";

export default {
  components: {
    formAtividade,
  },
  data() {
    return {
      // numeroAlunos: 1,
      alunos: [],
    };
  },
  methods: {
    adicionarAluno(aluno) {
      this.alunos.push(aluno);
      /*this.numeroAlunos++;
      console.log( numeroAlunos, "numero alunos" )*/
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.gith{
  height: 30px;
}
</style>
