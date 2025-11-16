import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/router/router.jsx";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    {/* react hot toast */}
    <Toaster position="top-left" reverseOrder={false} />
    <ToastContainer />
  </AuthProvider>
);
