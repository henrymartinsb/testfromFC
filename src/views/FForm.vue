<template>
     
       <div class="meu-container" :key="chave">        
          <h1 class="mb-4">Sobre o profissional</h1>
          <div class="row">           
            <div class="col">
              <h4 class="mb-3">Dados do profissional</h4>
              {{ chave }}
              <b-form>
              <b-form-group
                id="input-group-1"
                label="Nome Completo*"
                label-for="input-1"
              >
            
                <b-form-input
                  maxlength="48"
               
                  id="input-1"
                  v-model="form.nome"
                  type="text"
                  placeholder="Digite o nome completo"
                  required
                  @change="$v.form.nome.$touch()"
                ></b-form-input>
                <span v-if="$v.form.nome.$error && $v.form.nome.required === false" class="error" >Esse campo é requerido</span>
                <span v-if="$v.form.nome.required === true && $v.form.nome.$invalid === true" class="error" >Minimo 3 caracteres</span>
              </b-form-group>

              <b-form-group id="input-group-2" label="CPF*" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.cpf"
                  placeholder="Digite um CPF"
                  required
                  class="w-75"
                  v-mask="'###.###.###-##'"
                  @change="$v.form.cpf.$touch()"
                ></b-form-input>
                <span v-if="$v.form.cpf.$error && $v.form.cpf.required === false" class="error" >Esse campo é requerido</span>
                <span v-if="$v.form.cpf.required === true && $v.form.cpf.$invalid === true" class="error" >CPF invalido</span>
              </b-form-group>

              <b-form-group id="input-group-3" label="Número de celular*:" label-for="input-3">
                <b-form-input
                  id="input-2"
                  v-model="form.numero"
                  placeholder="(00) 0 0000-0000"
                  required
                  class="w-75"
                  v-mask="'(##) # ####-####'"
                  @change="$v.form.numero.$touch()"
                ></b-form-input>
               <span v-if="$v.form.numero.$error && !$v.form.numero.required" class="error" >Esse campo é requerido</span>
                <span v-if="$v.form.numero.required  && $v.form.numero.$invalid" class="error" >Numero invalido</span>
              </b-form-group>

              
               <div class="regiao">
                  <div class="w-50">
                    <label for="estadoField">Estado*</label>
                      <select class="form-control" id="estadoField" v-model="form.estado" @change="$v.form.estado.$touch()">
                        <option value="" disabled selected>Selecione</option>
                        <option  v-for="(estado, index) in estados" :key="index" :value="estado.value">
                          {{estado.texto}}
                        </option>
                      </select>
                         <span v-if="$v.form.estado.$error" class="error" >Esse campo é requerido</span>
                  </div>
              
                  <div class="w-50">
                      <label for="cidadeField">Cidade*</label>
                      <select class="form-control" id="cidadeField" v-model="form.cidade" @change="$v.form.cidade.$touch()">
                        <option value="" disabled selected>Selecione</option>
                        <option v-for="(cidade, index) in cidades[0][form.estado]" :key="index" :value="cidade">
                          {{cidade}}
                        </option>              
                      </select>
                      <span v-if="$v.form.cidade.$error" class="error" >Esse campo é requerido</span>
                  </div>
               </div>
               <div class="mt-4">
                 <Progresso :valor="50" :atual="1"></Progresso>
                 <ButtonNext @click.native="proximoForm" :texto="texto"></ButtonNext>
               </div>
            </b-form>
            
            </div>
            <div class="col my-auto d-sm-block d-none">
              <img class="img w-100" src="../assets/desktop-pagina-1.png" alt="">
            </div>
          </div>
       </div>
        
</template>

<script>

  import {required, minLength, maxLength } from 'vuelidate/lib/validators'
  import Progresso from '@/components/Progresso.vue'

  export default {
    data() {
      return {
        texto: "Próximo",
        form: {
          nome: "",
          cpf: null,
          numero: "",
          estado: "",
          cidade: ""      
        },
        chave: this.$store.state.chaveLimpaForm,
        estados: [
      { 
        texto: "Paraná", 
        value: "Paraná"
      },
      { 
        texto: "Rio Grande do Sul", 
        value: "Rio Grande do Sul"
      },
      { 
        texto: "Santa Catarina", 
        value: "Santa Catarina"
      }
    ],
        cidades: [
          {
            "Paraná": ["Londrina", "Maringá"],
            "Rio Grande do Sul": ["Pelotas", "Porto Alegre"],
            "Santa Catarina": ["Florianópolis", "Joinville"]
          }
        ]  
      }
    },
    validations: {
   
      form: {
        nome: { 
          required,
          mingLength: minLength(3),
          maxLength: maxLength(48)
        },
        cpf: {
          required,
          mingLength: minLength(14)
        },
        numero: {
          required,
          mingLength: minLength(16)
        },
        estado: {
          required
        },
        cidade: {
          required
        }
      }
    },
    methods: {
      proximoForm(){
        if (!this.$v.$invalid) {
        this.$store.dispatch("criarForm", this.form)
        this.$router.push({name: "SForm"})
        
        } else {
          /* this.$v.$touch() */
          this.$store.dispatch("limpaForm")
        }
      },
     
    },

    components: {
      Progresso
    }
  }
</script>

<style>
.regiao {
  display: flex;
  gap: 20px;
}





</style>