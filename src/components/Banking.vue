<template>
    <div class="banking-page">
      <!-- Header Section -->
      <header class="header">
        <div class="profile-icon">
          <img src="../assets/edit.svg" alt="Profile Avatar" />
        </div>
        <h1 class="title">Banking</h1>
      </header>
  
      <!-- Banking Section -->
      <section class="banking-section">
        <!-- Account Balance Section -->
        <div class="account-balance">
          <p class="balance-title">Account Balance</p>
          <div class="balance-box">
            <span class="currency-symbol">$</span>
            <span class="balance-amount">2,500.00</span>
          </div>
        </div>
  
        <!-- Recent Transactions -->
        <div class="transactions-section">
          <p class="transactions-title">Recent Transactions</p>
          <div class="transaction">
            <p><strong>Payment Received</strong> - $500</p>
            <p class="transaction-date">Jan 8, 2025</p>
          </div>
          <div class="transaction">
            <p><strong>Payment Sent</strong> - $150</p>
            <p class="transaction-date">Jan 7, 2025</p>
          </div>
          <div class="transaction">
            <p><strong>Payment Received</strong> - $200</p>
            <p class="transaction-date">Jan 5, 2025</p>
          </div>
          <div class="view-all">
            <router-link to="/transactions">View All Transactions</router-link>
          </div>
        </div>
  
        <!-- Actions Section -->
        <div class="banking-actions">
          <button class="action-btn" @click="initiateTransfer">Transfer Money</button>
          <button class="action-btn" @click="manageAccount">Manage Account</button>
        </div>
      </section>
  
      <!-- Footer with Quick Links -->
      <footer class="footer-links">
        <router-link to="/">Home</router-link>
        <router-link to="/settings">Settings</router-link>
        <router-link to="/help">Help</router-link>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BankingPage',
    methods: {
      initiateTransfer() {
        // Handle the logic for initiating money transfer
        console.log("Initiating transfer...");
      },
      manageAccount() {
        // Handle the logic for managing account settings
        console.log("Managing account...");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Banking Page Styles */
  .banking-page {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #f7f7f8;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  
  .profile-icon img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }
  
  .banking-section {
    width: 100%;
    max-width: 500px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
  }
  
  .account-balance {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .balance-title {
    font-size: 16px;
    color: #777;
    margin-bottom: 5px;
  }
  
  .balance-box {
    font-size: 32px;
    font-weight: bold;
    color: #4caf50;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .currency-symbol {
    font-size: 28px;
    margin-right: 5px;
  }
  
  .transactions-section {
    margin-bottom: 30px;
  }
  
  .transactions-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .transaction {
    background-color: #f9f9f9;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .transaction-date {
    font-size: 14px;
    color: #777;
  }
  
  .view-all a {
    font-size: 14px;
    color: #4caf50;
    text-decoration: none;
  }
  
  .view-all a:hover {
    text-decoration: underline;
  }
  
  .banking-actions {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .action-btn {
    padding: 15px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }
  
  .action-btn:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
  
  .action-btn:active {
    transform: scale(1);
  }
  
  .footer-links {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .footer-links a {
    font-size: 14px;
    color: #4caf50;
    text-decoration: none;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  
  /* Mobile Responsiveness */
  @media (max-width: 600px) {
    .title {
      font-size: 20px;
    }
  
    .balance-box {
      font-size: 28px;
    }
  
    .transaction {
      font-size: 14px;
    }
  
    .action-btn {
      padding: 12px;
    }
  
    .footer-links a {
      font-size: 12px;
    }
  }
  </style>
  