import { RouterProvider } from "react-router-dom";
import React from "react";

import { AuthProvider } from "./context/auth.context";
import Router from "./router";
import { MessageProvider } from "./context/Message.context";
import { CollapseProvider } from "./context/collapse.context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// , { router } <RouterProvider router={router}/ >

export default function App() {
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
