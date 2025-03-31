# Chat Application

## Overview
This chat application is designed to facilitate real-time communication between users. It provides a user-friendly interface for sending and receiving messages, creating chat groups, and managing user profiles. **Note: This project is currently under development and not yet completed.**

## Features
- **Real-time Messaging**: Send and receive messages instantly.
- **Group Chats**: Create and manage chat groups for multiple users.
- **User Authentication**: Secure login and signup functionality.
- **Message History**: View past conversations and messages.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Tech Stack
### Backend
- **Framework**: Express
- **Database**: PostgreSQL (using Prisma as the ORM)
- **Real-time Communication**: Socket.io 
- **Environment Variables**: dotenv
- **CORS**: For handling cross-origin requests

### Frontend
- **Framework**: Next.js
- **Styling**: TailwindCSS
- **State Management**: NextAuth for authentication
- **Future Integrations**: Kafka, Redis for pub/sub functionality

## Installation Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file and add the necessary environment variables.
4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage
- Open your browser and navigate to `http://localhost:3000` to access the chat application.

## Contribution Guidelines
We welcome contributions! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes and open a pull request.

## License
This project is licensed under the MIT License. Feel free to use and modify the code responsibly.
