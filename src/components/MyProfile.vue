<template>
    <div class="profile-container">
      <!-- Profile Header with Picture and Name -->
      <div class="profile-header">
        <div class="profile-picture">
          <img :src="userProfile.picture" alt="Profile Picture" />
          <button @click="editProfilePicture" class="edit-btn">
            <img src="../assets/edit.svg" alt="Edit" style="width: 18px;height: 18px;" class="edit-icon" />
          </button>
        </div>
        <div class="profile-details">
          <h2>{{ userProfile.name }}</h2>
          <p class="email">{{ userProfile.email }}</p>
          <p class="balance">Balance: <span>${{ userProfile.balance }}</span></p>
        </div>
      </div>
  
      <!-- Edit Profile Section -->
      <div class="edit-profile">
        <button @click="editProfileDetails" class="edit-profile-btn">Edit Profile</button>
      </div>
  
      <!-- Logout Button -->
      <div class="logout-button">
        <button @click="logout" class="logout-btn">Log Out</button>
      </div>
    </div>
  </template>
  
  <script>
  import Profile from '../assets/profile.svg'; 
  import Edit from "../assets/edit.svg";
  export default {
    data() {
      return {
        // User profile data (Replace with actual data from API or user context)
        userProfile: {
          name: 'John Doe',
          email: 'ronniepeterman8@gmail.com',
          balance: '250,000.01', // Simulating balance
          picture: Profile, // Placeholder image
        },
      };
    },
    methods: {
      editProfilePicture() {
        // Open image picker to update profile picture
        alert('Edit profile picture clicked');
      },
      editProfileDetails() {
        // Navigate to the edit profile page or open an edit form
        alert('Edit profile details clicked');
      },
      logout() {
        // Handle the log out functionality (e.g., clear session, remove token)
        alert('Logging out...');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Profile Container Styling */
  .profile-container {
    max-width: 450px;
    margin: 0 auto;
    padding: 25px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f8f8f8, #e6e6e6);
  }
  
  .profile-header {
    margin-bottom: 40px;
  }
  
  /* Profile Picture Styling */
  .profile-picture {
    position: relative;
    margin-bottom: 20px;
  }
  
  .profile-picture img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .edit-btn {
    position: absolute;
    bottom: -5px;
    right: -5px;
    background-color: #4caf50;
    border-radius: 50%;
    padding: 8px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .edit-btn:hover {
    transform: scale(1.1);
  }
  
  .edit-icon {
    width: 10px;
    height: 10px;
    filter: brightness(0) invert(1);
  }
  
  /* Profile Details Styling */
  .profile-details h2 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .email {
    font-size: 16px;
    color: #777;
  }
  
  .balance {
    font-size: 18px;
    font-weight: bold;
    color: #4caf50;
  }
  
  .balance span {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
  
  /* Edit Profile Button Styling */
  .edit-profile {
    margin-top: 20px;
  }
  
  .edit-profile-btn {
    background-color: #4caf50;
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .edit-profile-btn:hover {
    background-color: #45a049;
  }
  
  /* Logout Button Styling */
  .logout-button {
    margin-top: 40px;
  }
  
  .logout-btn {
    background-color: #f44336;
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .logout-btn:hover {
    background-color: #e53935;
  }
  </style>
  