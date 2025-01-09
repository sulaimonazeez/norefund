<template>
    <div class="login-container">
      <h1><span class="union">U</span>nion <span class="union">R</span>efund</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" placeholder="Enter Username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" placeholder="Enter Password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
        fixedUsername: 'user1', // Example static username
        fixedPassword: 'pass1234' // Example static password
      };
    },
    methods: {
      login() {
        // Check if fields are empty
        if (!this.username || !this.password) {
          this.error = "Please fill in both username and password.";
          return;
        }
  
        // Validate username and password
        if (this.username !== this.fixedUsername || this.password !== this.fixedPassword) {
          this.error = "Incorrect username or password.";
        } else {
          this.error = '';
          this.$router.push('/dashboard'); // Redirect to dashboard on success
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 300px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  .union {
    color: green;
  }
  input {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  .error-message {
    color: red;
    font-size: 14px;
  }
  </style>
  