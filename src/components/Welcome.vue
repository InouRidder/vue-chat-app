<template>
  <div id="welcome" class="container">
    <div class="card">
      <div class="card-content center-align">
        <h1 class="teal-text">
          {{ msg }}
        </h1>
        <form @submit.prevent="enterChat">
          <label for="Enter your name"></label>
          <input type="text" v-model="name" name="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to the Chat App',
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      if (this.name) {
        this.feedback = null
        this.$router.push({ name: 'Chat', params: { name: this.name }})

      } else {
        this.feedback = "Please enter a name"
      }
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome {
  max-width: 400px;
  margin-top: 100px;

}

#welcome h1 {
  font-size: 3em;
}

#welcome button {
  margin: 30px auto;
}
</style>
