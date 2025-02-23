# Yatri - Find Your Travel Companion 🚀

Yatri is a **React Native mobile app** built with the **MERN stack (MongoDB, Express, React Native, Node.js)** and **Redux** for state management. It helps users find travel companions by allowing them to **join upcoming trips** posted by others or **post their own trips**.

## ✨ Features

- 📝 **Post a Trip** – Users can create a trip listing with details like destination, date, and description.
- 🔍 **Find a Travel Buddy** – Browse trips posted by others and contact them to join.
- 📞 **Contact Travelers** – Securely connect with other users to plan trips together.
- 🛠 **User Authentication** – Signup/Login functionality using JWT authentication.
- 📍 **Location-Based Search** – Find trips based on destination or nearby locations.
- 🗂 **Redux for State Management** – Ensuring smooth and efficient app performance.

## 🏗 Tech Stack

- **Frontend:** React Native, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Redux
- **Authentication:** JWT (JSON Web Tokens)

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/yatri.git
cd yatri
```

### 2️⃣ Install Dependencies

Backend:
```bash
cd server
npm install
```

Frontend:
```bash
cd client
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the server folder and add:

```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Application

Backend:
```bash
cd server
npm start
```

Frontend:
```bash
cd client
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS (Mac only)
```

## 📌 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

💬 Feel free to contribute and improve Yatri! Happy coding! 🚀
