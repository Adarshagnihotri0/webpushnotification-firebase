import React, { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from 'firebase/messaging';

const App = () => {
  // Function to request notification permission and get the token
  async function requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // Generate token
        const token = await getToken(messaging, {
          vapidKey: "BK5wCD8b5Vm4b3soHFFg1x5Ik_4LFTJpgwLZ4WQpzgcF73-X-OScahbY5OWSrs6I3ui2xLjM-UYIWHFc8iZyNSY"
        });
        if (token) {
          console.log("Token Gen:", token);
        } else {
          console.warn("No registration token available.");
        }
      } else if (permission === "denied") {
        alert("You denied the permission.");
      }
    } catch (error) {
      console.error("Error requesting permission or getting token:", error);
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return <div>App</div>;
};

export default App;