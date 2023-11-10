import { RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import { AuthProvider } from "./context/auth.context";
import Router from "./router";
import { MessageProvider } from "./context/Message.context";
import { CollapseProvider } from "./context/collapse.context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from 'firebase/messaging'
import { messaging } from './firebase'

export default function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BMN0M5i6s_YnpRjEuMemNtDPxZzQFqxXS9E8D-m55YpchaNmC4I5EDxQTZhGiwNA0h9ugHTYYXfJZkhs4k4xToQ",
      });
      console.log(token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);


  return (
    <AuthProvider>
      <MessageProvider>
        <CollapseProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Router />
          <ToastContainer />
        </CollapseProvider>
      </MessageProvider>
    </AuthProvider>
  );
}
