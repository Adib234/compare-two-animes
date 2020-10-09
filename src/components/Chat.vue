<template>
  <section class="content">
    <div class="container2 has-text-centered is-size-2">Anime Title Chat</div>
    <div class="hero is-fullheight">
      <div class="columns">
        <div class="column is-one-fifth">is-four-fifths</div>
        <div class="column">
          <div class="messages">
            <li
              class="list-group-item"
              v-for="message in messages"
              :key="message"
            >
              <span :class="{ 'float-left': message.type === 1 }">
                {{ message.message }}
                <small>:{{ message.user }}</small>
              </span>
            </li>
          </div>
          <div class="bottom">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="newMessage"
            />
            <button @click="send" class="button">Send!</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      socket: {},
      newMessage: null,
      messages: [],
      typing: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
    };
  },

  created() {
    this.socket = io("http://localhost:8080/chat");
    window.onbeforeunload = () => {
      this.socket.emit("leave", this.username);
    };

    // Listening to chat-message event emitted from the server and pushing to messages array
    this.socket.on("chat-message", (data) => {
      this.messages.push({
        message: data.message,
        type: 1,
        user: data.user,
      });
    });

    // Listening to typing event emitted from the server and setting the data (username) to the UI
    this.socket.on("typing", (data) => {
      this.typing = data;
    });

    // Listening to stopTyping event emitted from the server and setting the typing property to false
    this.socket.on("stopTyping", () => {
      this.typing = false;
    });

    // Listening to 'joined' event emitted from the server and pushing the data to info array
    this.socket.on("joined", (data) => {
      this.info.push({
        username: data,
        type: "joined",
      });

      // Setting a time out for the info array to be emptied
      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    // Listening to 'leave' event emitted from the server and pushing the data to info array
    this.socket.on("leave", (data) => {
      this.info.push({
        username: data,
        type: "left",
      });

      // Setting a time out for the info array to be emptied
      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    // Listening to 'connections' event emitted from the server to get the total number of connected clients
    this.socket.on("connections", (data) => {
      this.connections = data;
    });
  },
  // Vue Watch hook
  watch: {
    // Watching for changes in the message inbox box and emitting the either 'typing' or 'stopTyping' event
    newMessage(value) {
      value
        ? this.socket.emit("typing", this.username)
        : this.socket.emit("stopTyping");
    },
  },

  //Vue Methods hook
  methods: {
    //The send method stores the user message and emit an event to the server.
    send() {
      this.messages.push({
        message: this.newMessage,
        type: 0,
        user: "Me",
      });

      this.socket.emit("chat-message", {
        message: this.newMessage,
        user: this.username,
      });
      this.newMessage = null;
    },

    // The addUser method emit a 'joined' event with the username and set the 'ready' property to true.
    addUser() {
      this.ready = true;
      this.socket.emit("joined", this.username);
    },
  },
};
</script>

<style scoped>
.container2 {
  border-bottom: 1px solid;
}
.column {
  border-right: 1px solid;
}
.columns {
  margin-top: 0;
  min-height: inherit;
}

.hero.is-fullheight {
  min-height: 91vh;
  align-items: stretch;
  display: flex;
  flex-direction: column;
}
.footer {
  padding: 0;
}
.messages {
  min-height: 82vh;
}
.input {
  margin-left: 1rem;
  margin-right: 2rem;
}
.bottom {
  display: flex;
  margin-right: 1rem;
}
</style>
