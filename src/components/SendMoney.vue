<template>
  <div id="app">
    <div class="transaction-form">
      <h1 class="app-title">Send Money</h1>

      <!-- Transaction Form -->
      <form @submit.prevent="onSubmitTransaction">
        <div class="input-group">
          <label for="recipient" class="input-label">Recipient</label>
          <input type="text" id="recipient" v-model="recipient" class="input-field" placeholder="Enter recipient name" required />
        </div>

        <div class="input-group">
          <label for="amount" class="input-label">Amount</label>
          <input type="number" id="amount" v-model="amount" class="input-field" placeholder="Amount to send" required />
        </div>

        <button type="button" class="next-button" @click="showPinModal = true">Next</button>
      </form>
    </div>

    <!-- PIN Modal -->
    <div v-if="showPinModal" class="modal-overlay">
      <div class="modal">
        <h3 class="modal-title">Enter your PIN</h3>
        <input
          type="password"
          v-model="enteredPin"
          class="input-field pin-input"
          maxlength="4"
          placeholder="****"
        />
        <div class="modal-actions">
          <button class="modal-btn" @click="verifyPin">Submit</button>
          <button class="modal-btn cancel" @click="cancelPinModal">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Transaction Result Modal -->
    <div v-if="showTransactionModal" class="modal-overlay">
      <div class="modal">
        <div class="transaction-result">
          <div v-if="transactionSuccess" class="transaction-success">
            <img :src="checkCircle" alt="Success" class="icon" />
            <p class="result-message">{{ transactionMessage }}</p>
          </div>
          <div v-else class="transaction-fail">
            <img :src="errorCircle" alt="Error" class="icon" />
            <p class="result-message">{{ transactionMessage }}</p>
          </div>
        </div>
        <button class="modal-btn" @click="closeTransactionModal">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import checkCircle from '../assets/check-circle.svg';  
import errorCircle from '../assets/error-circle.svg';  

export default {
  data() {
    return {
      recipient: '',
      amount: '',
      enteredPin: '',
      showPinModal: false,
      showTransactionModal: false,
      transactionSuccess: null,
      transactionMessage: '',
      checkCircle,
      errorCircle,
    };
  },
  methods: {
    onSubmitTransaction() {
      this.showPinModal = true;
    },
    verifyPin() {
      const correctPin = '1234'; // Simulate the correct PIN
      const requiredDeposit = 10000000000000000000000; // Amount user needs to add to withdraw

      if (this.enteredPin === correctPin) {
        // Simulate a check if the user has enough balance
        if (this.amount < requiredDeposit) {
          this.transactionSuccess = false;
          this.transactionMessage = `You need to add $1000 in order to withdraw the money due to long savings.`;
        } else {
          this.transactionSuccess = true;
          this.transactionMessage = `Transaction successful! You have sent $${this.amount} to ${this.recipient}.`;
        }
        this.showPinModal = false;
        this.showTransactionModal = true;
      } else {
        this.transactionSuccess = false;
        this.transactionMessage = 'Incorrect PIN. Please try again.';
        this.showPinModal = false;
        this.showTransactionModal = true;
      }
    },
    closeTransactionModal() {
      this.showTransactionModal = false;
      this.resetForm();
    },
    cancelPinModal() {
      this.showPinModal = false;
      this.enteredPin = '';
    },
    resetForm() {
      this.recipient = '';
      this.amount = '';
      this.enteredPin = '';
    }
  },
};
</script>

<style scoped>
/* General Layout and Background */
#app {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f7f7f8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.app-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
}

/* Transaction Form */
.transaction-form {
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  box-sizing: border-box;
}

.input-group {
  margin-bottom: 20px;
}

.input-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.input-field {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f4f4f4;
  outline: none;
  transition: border 0.2s ease;
}

.input-field:focus {
  border: 1px solid #4caf50;
}

.next-button {
  width: 100%;
  padding: 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.next-button:hover {
  background-color: #45a049;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  padding: 30px;
  z-index: 1000;
  box-sizing: border-box;
}

.modal {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  text-align: center;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.modal-btn {
  width: 86%;
  padding: 15px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center;
}

.modal-btn:hover {
  background-color: #45a049;
}

.modal-btn.cancel {
  background-color: #f44336;
}

.modal-btn.cancel:hover {
  background-color: #e53935;
}

/* Success and Fail Message Styles */
.transaction-result {
  margin-top: 20px;
}

.transaction-success {
  color: #4caf50;
}

.transaction-fail {
  color: #f44336;
}

.result-message {
  font-size: 18px;
  margin-top: 10px;
}

.icon {
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
}

/* Pin Modal Specific Styles */
.pin-input {
  padding: 15px;
  font-size: 22px;
  width: 80%;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f4f4f4;
}

.pin-input:focus {
  border: 1px solid #4caf50;
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
  .app-title {
    font-size: 24px;
  }

  .transaction-form {
    padding: 20px;
    max-width: 90%;
  }

  .input-field, .next-button {
    padding: 12px;
    font-size: 14px;
  }

  .modal {
    width: 90%;
    padding: 20px;
  }

  .modal-title {
    font-size: 18px;
  }

  .modal-btn {
    padding: 12px;
    font-size: 14px;
  }

  .icon {
    width: 50px;
    height: 50px;
  }
}
</style>
