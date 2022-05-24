<template>
  <div>
    <div class="progresso">
      <b-progress class="bProgresso" style="height: 20px;" :value="valor" :max="100"></b-progress>
      <span>{{atual}} de 2</span>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "Progresso",
  props: [
    "valor",
    "atual"
  ]
}
</script>

<style>

.progresso {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 8px;
}

.progresso span {
  color: var(--roxo-iv);
  font-weight: 600;
  font-size: 0.9rem;
}

.bProgresso {
  width: 80%;
}

.progress-bar {
  background-color: var(--roxo-iv) !important;
}



</style>