<template>
     
     <div class="meu-container">
        <h1 class="mb-4">Sobre o atendimento</h1>
        <div class="row">           
            <div class="col">
     
              <h4>Detalhes do atendimento</h4>
              <b-form>             
                <!--  <label for="estadoField">Especialidade principal*</label>
                 <select class="form-control" id="especialidadeField" v-model="$v.form.especialidade.$model" >
                  <option value="" disabled selected>Selecione a especialidade</option>
                  <option  v-for="(item, index) in especialidades" :key="index">
                      {{item}}
                   </option>
                   <span class="error" v-if="$v.form.especialidade.$invalid">Erro</span>
                </select> -->
             
                  <div>
                    <label for="especialidadeField">Especialidade principal*</label>
                      <select class="form-control" id="especialidadeField" v-model="form.especialidade" @change="$v.form.especialidade.$touch()">
                        <option value="" disabled selected>Selecione a especialidade</option>
                        <option  v-for="(item, index) in especialidades" :key="index" >
                          {{item}}
                        </option>
                      </select> 
                         <span v-if="$v.form.especialidade.$error" class="error" >Esse campo é requerido</span>
                  </div>

                <label class="sr-only" for="precoField">Informe o preço da consulta*</label>
                <b-input-group prepend="R$" class="mb-2 mr-sm-2 mb-sm-0 w-75">
                  <b-form-input  v-model="form.valor"  id="precoField" placeholder="Valor" @change="$v.form.valor.$touch()"></b-form-input>
                  
                </b-input-group>
                <span v-if="$v.form.valor.$error && !$v.form.valor.required" class="error" >Esse campo é requerido</span>
                <span v-if="$v.form.valor.required  && $v.form.valor.$invalid" class="error" >Digite um valor entre 30 e 300</span>

                <label class="sr-only" for="checkbox-group">Formas de pagamento da consulta*</label>
                <b-form-checkbox-group
                  id="checkbox-group"
                  v-model="form.pagamento"
                  :options="formasDePagamento"  
                  class="mb-3 mt-2 check-person"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
                  @change="$v.form.pagamento.$touch()"
               >
                    <b-form-group class="my-form-group" v-if="seContem('Cartão de credito')" label="Numero de parcelas" v-slot="{ ariaDescribedby }">
                      <b-form-radio v-model="form.parcelas"  @change="$v.form.parcelas.$touch()" :aria-describedby="ariaDescribedby" name="some-radios" value="1x">1x</b-form-radio>
                      <b-form-radio v-model="form.parcelas" @change="$v.form.parcelas.$touch()" :aria-describedby="ariaDescribedby" name="some-radios" value="2x">2x</b-form-radio>
                      <b-form-radio v-model="form.parcelas" @change="$v.form.parcelas.$touch()" :aria-describedby="ariaDescribedby" name="some-radios" value="3x">3x</b-form-radio>
                       <span v-if="$v.form.parcelas.$error" class="error" >Esse campo é requerido</span>
                    </b-form-group>
                </b-form-checkbox-group>
                  <span v-if="$v.form.pagamento.$error" class="error" >Esse campo é requerido</span>

                <div class="mt-4">
                 <Progresso :valor="100" :atual="2"></Progresso>
                <ButtonNext @click.native="mandar" :texto="texto" >mandar</ButtonNext >
               </div>
              </b-form>
            </div>
            <div class="col my-auto d-sm-block d-none">
              <img class="img w-100" src="../assets/desktop-pagina-2.png" alt="">
            </div>
        </div>
            
    </div>
        
            

</template>


<script>
  import {required, between} from 'vuelidate/lib/validators'
  import Progresso from '@/components/Progresso.vue';
  import  { VMoney }  from  'v-money'
   

  export default {
    data() {
      return {
        texto: "Proximo",
        form: {
          especialidade: "",
          valor: null,
          pagamento: [],
          parcelas: "1x"
        },
        especialidades: [
          "Cardiologia", 
          "Dermatologia", 
          "Neurologia", 
          "Oftalmologia", 
          "Psiquiatria", 
          "Urologia"
       ],
       formasDePagamento: [
          { item: 'Dinheiro', name: 'Em dinheiro' },
          { item: 'Pix', name: 'Pix' },
          { item: 'Cartão de credito', name: 'Cartão de credito'},
        ]
    }
    },
    directives: {money: VMoney},
     validations: {
      form: {
        especialidade: { 
          required
        },
        valor: {
          required,
          between: between(30,300)
        },
        pagamento: {
          required
        },
        parcelas: {
          required
        }
    }
     },
    methods: {
      seContem(a){
        let b = a 
        return this.form.pagamento.includes(b)
      },
      mandar(e){  
        e.preventDefault();
         if (!this.$v.$invalid) {
           this.$store.dispatch("criarForm", this.form)
          this.$router.push({name: "TForm"})}
        else {
          this.$v.$touch()
        }
        
        
        
      }
    },
    components: {
      Progresso
    }
  }
</script>

<style>

 .custom-checkbox {
  background: #F9F9F9;
  padding: 10px 20px 10px 20px;
  margin: 5px 0px 0px 0px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(30,60,90,.3);
}

.custom-control-label {
  margin-left: 10px;
  margin-top: 0px;
}

.my-form-group{
   background: #F9F9F9;
  margin-top: -5px;
  padding-bottom: 5px;
  border-radius: 10px;
}

 .col-form-label {
   margin-left: 45px;
 }

.custom-radio {
  margin-left: 50px;
}

.input-group-prepend .input-group-text{
  background-color: var(--roxo-iv);
  color: #fff;
  border-radius: 0px;
}



</style>