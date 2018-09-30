<template>
  <div id="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New message (enter to add)</label>
      <p v-if="feedback" class="red-text">{{ this.feedback }}</p>
      <input type="text" name="new-message" v-model="newMessage">
    </form>

  </div>
</template>

<script>
import db from '@/firebase/init'

  export default {
    name: 'NewMessage',
    props: ['name'],
    data () {
      return {
        newMessage: null,
        feedback: null
      }
    },
    methods: {
      addMessage () {
        if (this.newMessage) {
          db.collection('messages').add({content: this.newMessage, timestamp: Date.now(), name: this.name})
          .catch(error => console.log(error))
          this.newMessage = null
          this.feedback = null
        } else {
          this.feedback = "Please enter a message"
        }
        console.log(this.newMessage, this.name, Date.now())
      }
    }

  }
</script>
