import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./Rotas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ToastContainer position="top-center" theme="dark"  style={{width: "auto"}}/>
        <Rotas />
    </React.StrictMode>
);
