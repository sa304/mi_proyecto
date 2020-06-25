<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/favoritos">Favoritos</router-link>

<div class="container mt-5">
  <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button @click="login">Log in</button>
    <button @click="quienSoy">¿Quien soy?</button>
    <button @click="logout">Log out</button>
</div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password:' '
    }
  },
  methods:{
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then (
        accept => {
          alert('Fuiste logeado! revisa la consola')
          this.quienSoy
        },
        reject => {
          alert('No mi hermano, usted no existe')
          console.log(reject.message)
        }
      )
    },
    logout(){
      Firebase.auth().signOut()
    },
    quienSoy(){
      let currentUser = Firebase.auth().currentUser
      console.log(currentUser)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
