<template>
  <div id="app">
    <div class="receive-page">
      <!-- Header Section -->
      <header class="app-header">
        <div class="profile-icon">
          <img src="../assets/edit.svg" alt="Profile Avatar" />
        </div>
        <h1 class="app-title">Receive Money</h1>
      </header>

      <!-- Money Receiving Section -->
      <section class="receive-money-section">
        <div class="receive-info">
          <div class="amount-box">
            <span class="currency-symbol">Loading.....</span>
          </div>
        </div>

        <!-- QR Code -->

         
        <!-- Accept Payment -->
        <button class="accept-btn" @click="acceptPayment">Accept Payment</button>
      </section>

      <!-- Footer with Quick Links -->
      <footer class="footer-links">
        <a href="#">Home</a>
        <a href="#">Settings</a>
        <a href="#">Help</a>
      </footer>
    </div>

    <!-- Modal: Unable to Receive Payment -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2 class="modal-title">Unable to Receive Payment</h2>
        <p class="modal-message">It seems that you're unable to receive payments at the moment. Please contact your provider for further assistance.</p>
        <button class="modal-btn" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Placeholder data for the money receiving page
      amountToReceive: '150.00',
      senderName: 'John Doe',
      paymentId: '$jane3123hdg3',
      paymentStatus: 'Pending',
      showModal: false, // Flag to control modal visibility
    };
  },
  methods: {
    acceptPayment() {
      // Handle accepting the payment logic
    },
    closeModal() {
      this.showModal = false;
    },
  },
  mounted() {
    // Display modal every 5 seconds (adjust interval duration here)
    this.modalInterval = setInterval(() => {
      this.showModal = true;
    }, 3000); // 5000ms = 5 seconds
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.modalInterval);
  }
};
</script>

<style scoped>
/* General Page Layout */
#app {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.receive-page {
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 400px;
}

.modal-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.modal-message {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.modal-btn {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.modal-btn:hover {
  background-color: #45a049;
}

/* Header */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.profile-icon img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-left: 10px;
}

/* Money Receiving Section */
.receive-money-section {
  text-align: center;
}

.receive-info {
  margin-bottom: 20px;
}

.amount-title {
  font-size: 16px;
  color: #777;
  margin-bottom: 5px;
}

.amount-box {
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

.qr-section {
  margin-top: 30px;
}

.qr-title {
  font-size: 16px;
  color: #777;
  margin-bottom: 10px;
}

.qr-code {
  width: 160px;
  height: 160px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.payment-details {
  margin-top: 20px;
  font-size: 16px;
  color: #333;
}

.payment-details p {
  margin: 8px 0;
}

.accept-btn {
  width: 100%;
  padding: 15px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.accept-btn:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.accept-btn:active {
  transform: scale(1);
}

/* Footer Links */
.footer-links {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.footer-links a {
  font-size: 14px;
  color: #4caf50;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #45a049;
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
  .receive-page {
    padding: 20px;
    max-width: 100%;
  }

  .app-title {
    font-size: 20px;
  }

  .amount-box {
    font-size: 28px;
  }

  .qr-code {
    width: 140px;
    height: 140px;
  }

  .accept-btn {
    padding: 12px;
  }

  .footer-links a {
    font-size: 12px;
  }
}
</style>
