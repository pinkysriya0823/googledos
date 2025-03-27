# Google Docs Clone Assignment  

## 📌 Project Overview  
This is a **Google Docs Clone** built as part of an assignment. It features **Google OAuth authentication**, a **rich-text editor**, and **Google Drive API integration** for saving and retrieving documents.  

## 🚀 Features  
- **User Authentication:** Secure login with **Google OAuth** (Firebase Auth or Passport.js).  
- **Rich-Text Editor:** A feature-rich text editor for creating and editing letters.  
- **Google Drive Integration:** Users can **save** and **retrieve** letters directly from their Google Drive.  
- **Full-Stack Application:** Built using **React.js (frontend)** and **Node.js with Express.js (backend)**.  
- **Cloud Deployment:** Deployed on a cloud provider for easy access.  

## 🛠️ Tech Stack  
- **Frontend:** React.js, Vite, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Authentication:** Firebase Auth / Passport.js  
- **Database (if needed):** PostgreSQL / MySQL / MongoDB  
- **Cloud Deployment:** AWS / Vercel / Firebase  

## 🔧 Setup Instructions  
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/sriyagadagoju/googledocsclone.git
   cd googledocsclone


### Installation

To set up the project locally, follow these steps:



 **Install dependencies**:
    ```
npm install
    ```

 **Setup Environment Variable**:
Create a .env file in the root directory and add:

  ``` GOOGLE_CLIENT_ID=your_client_id```
```GOOGLE_CLIENT_SECRET=your_client_secret```
```GOOGLE_DRIVE_API_KEY=your_api_key```
```DATABASE_URL=your_database_url```


 **Run the app**:
    ```
    npm run dev
    ```
    **Build and Deploy**:
```npm run build```
  **Folder Structure**:
/googledocsclone
│── /client   # Frontend (React)
│── /server   # Backend (Node.js + Express)
│── /public   # Static assets
│── package.json
│── .env.example
│── README.md


### How It Works

1. **Text Synchronization**: Uses Firebase Firestore to listen for document changes and broadcast updates to all users in real-time.
2. **Optimized Editing**: The editor detects idle typing periods and adjusts syncing to reduce redundant operations.

### Code Breakdown

- **Editor.tsx**: The main editor component, implementing Firebase document synchronization and real-time cursor tracking.
- **firebase-config.js**: Firebase configuration for accessing Firestore.
- **Styling**: The editor is styled to resemble Google Docs, using custom CSS for a familiar look and feel.


### **Next Steps:**  
- Add **your correct GitHub repo link** in the **clone command**.  
- Replace **API keys and deployment URLs** in the **`.env` file section**.  
- Let me know if you need **more modifications!** 🚀
