<template>
 <div class="container mt-5">
   <h1 class="text-center text-white">Sing in</h1>
        <b-input class="text-center mt-3" type="text" v-model="email" placeholder="usuario@gmail.com"></b-input>
        <b-input class="text-center mt-3" type="text" v-model="password" placeholder="123456"></b-input>

        <b-button @click="login" block variant="primary" class="mt-3">Log in</b-button>
        <b-button @click="quienSoy" block variant="primary" class="mt-3">¿Quien soy?</b-button>
        <b-button @click="logout" block variant="primary" class="mt-3 mb-5">Log out</b-button>
 </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:  #5eb0c5;
}
​ #nav {
  padding: 30px;
}
​ #nav a {
  font-weight: bold;
  color: #2c3e50;
}
​ #nav a.router-link-exact-active {
  color: #fff
}
</style>

<!--script>
import Firebase from 'firebase'​
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
</script-->