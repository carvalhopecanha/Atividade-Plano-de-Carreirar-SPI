<template>
  <main class>
    <div class="container-fluid text-center">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="m-5">
            <img src="../assets/img/logoN.png" class="pb-4" alt="logo" />
            <div class="input-group mb-3">
              <span class="input-group-text" id="user">
                <img
                  src="../assets/img/user.png"
                  style="width: 20px"
                  alt="Ícone do usuário"
                />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Usúario"
                aria-label="Usúario"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="pass">
                <img
                  src="../assets/img/cad.png"
                  style="width: 18px"
                  alt="Ícone do usuário"
              /></span>
              <input
                type="text"
                class="form-control"
                placeholder="Senha"
                aria-label="Senha"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-success" type="button" @click="nextPage">
                Entrar
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-6 ">
         <img src="../assets/img/bg/14.jpg" class="imgbg" alt="bg">
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      name: "home",
    };
  },
  methods: {
    nextPage() {
      this.$router.push("/itens");
    },
  },
};
</script>

<style>
.imgbg{
  display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;

}
</style>
