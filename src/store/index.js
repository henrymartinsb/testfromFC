import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    chaveLimpaForm: false,
    form: {
      nome: "",
      cpf: "",
      numero: "",
      estado: "",
      cidade: "",
      especialidade: "",
      valor: "",
      pagamento: "",
      parcelas: ""
    },
  },
  mutations: {
   UPDATE_FORM(state, payload) {
      state.form = Object.assign(state.form, payload);
    }
  },
  actions: {
   criarForm(context, payload){
     context.commit("UPDATE_FORM", payload)
   },
  
  },
  modules: {
  }
})
