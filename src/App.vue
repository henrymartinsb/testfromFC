<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<style>

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap");

:root {
  --roxo-iv: #483698;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #8a8a8a;
}

h1,
h4 {
  font-family: "Comfortaa", cursive;
}

h1 {
  color: var(--roxo-iv);
  font-size: 54px;
}

h4 {
  color: #000;
}


#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe766;
}

label {
  color: #000;
  margin-top: 18px;
}

.error {
  color: red;
}

</style>
