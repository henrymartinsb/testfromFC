<template>
    <div class="meu-container">
          <h1 class="mb-4r">Revisão de cadastro</h1>
          <div class="row">           

            

            <div class="col">

              <div class="dados">
                <div>
                   <p>Nome Completo</p>
                   <span>{{this.$store.state.form.nome}}</span>
                </div>
                <div>
                   <p>CPF</p>
                   <span>{{this.$store.state.form.cpf}}</span>
                </div>
                <div>
                   <p>Numero de celular ou telefone</p>
                   <span>{{this.$store.state.form.numero}}</span>
                </div>
                <div>
                   <p>Estado/Cidade</p>
                   <span>{{this.$store.state.form.estado}} - {{this.$store.state.form.cidade}}</span>
                </div>
                <div>
                   <p>Especialidade principal</p>
                   <span>{{this.$store.state.form.especialidade}}</span>
                </div>
                <div>
                   <p>Preço da consulta</p>
                   <span>{{this.$store.state.form.valor | formataValor}}</span>
                </div>
                 <div>
                   <p>Formas de pagamento da consulta</p>
                   <div v-for="(item, index) in this.$store.state.form.pagamento" :key="index">
                     <span>{{item}}</span>
                   </div>
                   <span v-if="seContem('Cartão de credito')">
                     Em {{this.$store.state.form.parcelas}} sem juros!
                   </span>
                </div>
              </div>
              
              <div class="text-center">
                  <ButtonNext :yellow="true" @click.native="finalizarCadastro" :texto="textoConcluir"></ButtonNext><br>
                  <button  class="mt-3 btn btn-edit" @click="editarDados">{{textoEditar}}</button>
              </div>
            </div>
             <div class="col my-auto d-sm-block d-none">
              <img class="img w-100" src="../assets/desktop-pagina-3.png" alt="">
            </div>
          </div>
          
       </div>
</template>

<script>
export default {
  data() {
    return {
      textoConcluir: "CADASTRAR PROFISSIONAL",
      textoEditar: "Editar cadastro",
      form: []
    }
  },
    filters: {
      formataValor(valor) {
        return `R$ ${valor},00`
      }
    },
  methods: {
    finalizarCadastro(){
      this.$router.push({name: "CadastroConcluido"})
    },
    editarDados() {
      this.$router.go(-2)
    },
     seContem(a){
        let b = a 
        return this.$store.state.form.pagamento.includes(b)
      },
  }
}
</script>

<style>
.btn-edit {
  color: var(--roxo-iv);
}

.dados {
  margin-bottom: 20px;
}

.dados div{
  margin: 5px 0px;
}

.dados p {
  color: #000;
  margin: 0px;
}
</style>