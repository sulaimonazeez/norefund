<template>
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h2>Welcome, John Doe!</h2>
        <div class="balance-overview">
          <h3>Your Balance</h3>
          <p class="balance">${{ balance }}</p>
        </div>
      </header>
  
      <div class="quick-actions">
        <button @click="sendMoney" class="send-money">
          <span class="action-icon">💸</span> Send Money
        </button>
        <button @click="receiveMoney" class="receive-money">
          <span class="action-icon">💵</span> Receive Money
        </button>
      </div>
  
      <section class="transaction-history">
        <h3>Recent Transactions</h3>
        <ul>
          <li v-for="transaction in transactions" :key="transaction.id">
            <div class="transaction-date">{{ transaction.date }}</div>
            <div class="transaction-description">{{ transaction.description }}</div>
            <div :class="['transaction-amount', { 'negative': parseInt(transaction.amount) < 0, 'positive': parseInt(transaction.amount) > 0 }]">
              ${{ transaction.amount }}
            </div>
          </li>
        </ul>
      </section>
  
      <!-- Bottom Navigation Bar -->
       </div>
    <div class="bottom-nav">
        <div class="nav-item" @click="goToHome">
          <span class="nav-icon">🏠</span>
          <span class="nav-label">Home</span>
        </div>
        <div class="nav-item" @click="goToBanking">
          <span class="nav-icon">💳</span>
          <span class="nav-label">Banking</span>
        </div>
        <div class="nav-item" @click="goToInvesting">
          <span class="nav-icon">📈</span>
          <span class="nav-label">Investing</span>
        </div>
        <div class="nav-item" @click="goToActivity">
          <span class="nav-icon">📝</span>
          <span class="nav-label">Activity</span>
        </div>
        <div class="nav-item" @click="goToProfile">
          <span class="nav-icon">👤</span>
          <span class="nav-label">Profile</span>
        </div>
      </div>
  </template>



<style scoped>
.dashboard-container {
  padding: 20px;
  background-color: #f4f7fa;
  font-family: 'Roboto', sans-serif;
}

.dashboard-header {
  background-color: #00796b;
  padding: 20px;
  border-radius: 15px;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 28px;
  font-weight: 600;
}

.balance-overview {
  margin-top: 10px;
}

.balance {
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-top: 10px;
}

.quick-actions {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

button {
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

.send-money {
  background-color: #00c853;
  color: white;
}

.receive-money {
  background-color: #00796b;
  color: white;
}

.action-icon {
  font-size: 20px;
}

.transaction-history {
  margin-top: 40px;
  margin-bottom: 10vw;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.transaction-history h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f1f1f1;
}

.transaction-date {
  font-size: 14px;
  color: #777;
}

.transaction-description {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  position: relative;
}

.transaction-amount {
  font-size: 17px;
  font-weight: 550;
}

.negative {
  color: #e53935;
}

.positive {
  color: #00c853;
}

/* Bottom Navigation */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px 0;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  text-align: center;
  font-size: 14px;
  color: #757575;
  cursor: pointer;
}

.nav-item:hover {
  color: #00c853;
}

.nav-icon {
  font-size: 20px;
}

.nav-label {
  display: block;
  font-size: 12px;
  margin-top: 5px;
}
</style>


<script>
export default {
  data() { 
    return {
      balance: "250,000.01",  // Mock balance
      transactions: [
        { id: 1, date: '2024-11-08', description: 'Deposit from Bank', amount: '6,000' },
        { id: 2, date: '2024-10-26', description: 'Deposit from Bank', amount: '7,000' },
        { id: 3, date: '2024-10-01', description: 'Deposit from Bank', amount: '6,000' },
        { id: 4, date: '2024-08-15', description: 'Deposit from Bank', amount: '10,000' },
        { id: 5, date: '2024-07-06', description: 'Deposit from Bank', amount: '8,000' },
        { id: 6, date: '2024-06-29', description: 'Deposit from Bank', amount: '4,000' },
        
        
      ]
    };
  },
  methods: {
    sendMoney() {
      this.$router.push('/send-money'); // Navigate to Send Money page
    },
    receiveMoney() {
      this.$router.push('/receive-money'); // Navigate to Receive Money page
    },
    goToHome() {
      this.$router.push('/dashboard');  //to Home
    },
    goToBanking() {
      this.$router.push('/dashboard'); // Navigate to Banking
    },
    goToInvesting() {
      this.$router.push('/dashboard'); // Navigate to Investing
    },
    goToActivity() {
      this.$router.push('/dashboard'); // Navigate to Activity
    },
    goToProfile() {
      this.$router.push('/profile'); // Navigate to Profile
    }
  }
};
</script>
