// src/App.js
import { useEffect } from "react";
import { auth } from "./firebase-config";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Editor from "./components/text-editor";

function App() {
  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log("User signed in:", user.uid);
      }
    });
  }, []);
  
  return (
    <div className="App">
      <header>
        <h1>Sriya's Google Docs Clone </h1>
      </header>
      <Editor />
    </div>
  );
}

export default App;
