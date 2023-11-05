<template>
    <form class="needs-validation text-start" @submit.prevent="verificarFormulario" >
  <div class="col-md-6 pb-4">
    <label for="campo1" class="form-label">Nome</label>
    <input  v-model="campos.nome" type="text" class="form-control" id="nome"  required>
  </div>
  <div class="col-md-6 pb-4">
    <label for="campo2" class="form-label ">RGM</label>
    <input  v-model="campos.rgm" type="number" class="form-control" id="rgm"  required>
  </div>
  <div class="col-md-6 pb-4">
    <label for="campo3" class="form-label">Turma</label>
    <input  v-model="campos.turma" type="text" class="form-control" id="turma"  required>
  </div>
  <div class="col-md-6 pb-4">
    <label for="campo4" class="form-label">Nota 1</label>
    <input  v-model="campos.nota1" type="number" class="form-control" id="nota1" required>
    <div class="valid-feedback">
    </div>
  </div>
  <div class="col-md-6 pb-4">
    <label for="campo5" class="form-label">Nota 2</label>
    <input  v-model="campos.nota2" type="number" class="form-control" id="nota2" required>
  </div>

  <div class="col-md-6 pt-4 pb-5 d-grid gap-2">
    <button @click="adicionarAluno" class="btn btn-success" type="submit">Adicionar</button>
  </div>
</form>

</template>

<script>
export default {
  data() {
    return {
      name: "formAtividade",
      campos: {
        nome: '',
        rgm: '',
        turma: '',
        nota1: '',
        nota2: '',
     
      }
    };
  },
  methods: {
    adicionarAluno() {
      const { nome, rgm, turma, nota1, nota2 } = this.campos;

      if (nome && rgm && turma && nota1 && nota2) {
        this.$emit('aluno-adicionado', {
      nome: this.campos.nome,
      rgm: this.campos.rgm,
      turma: this.campos.turma,
      nota1: this.campos.nota1,
      nota2: this.campos.nota2
        });

        this.campos = {
          nome: '',
          rgm: '',
          turma: '',
          nota1: '',
          nota2:''
        };

      }
    }
  }

};



</script>