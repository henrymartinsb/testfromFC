<template>
    <section class="my-container">
      <button class="previus-btn" v-if="$route.name !== 'FormOne' && $route.name !== 'CadastroConcluido'" @click="$router.go(-1)"><img src="../assets/Vector.svg" alt=""></button>
      <keep-alive>
      <router-view></router-view>   
      </keep-alive>
       <span v-if="$route.name === 'CadastroConcluido'" class="dev">by <a href="https://portfolio-henry.vercel.app/">Henry</a></span>
    </section>
    
</template>

<script>

export default {
  components: {
  },
  methods: {
      mudaForm(){
        
        this.$router.push({name: "FormTwo"})
      },
      voltaForm(){
        this.$router.go(-1)
      }
    },
}
</script>

<style scoped>
.my-container {
  width: 900px;
  background-color: #fff;
  padding: 60px;
  border-radius: 20px;
  position: relative;
}

.previus-btn {
  position: absolute;
  top: -50px;
  left: 10px;
  border: none;
  tranFormTwo: scale(2);
  background-color: transparent;
}

.dev {
  position: absolute;
  bottom: -30px;
  
}

a {
  font-family: "Comfortaa";
  text-decoration: none;
  color: #8a8a8a;
}

a:hover {
  font-weight: bold;
  font-size: large;
  color: #4803b8;
}

</style>