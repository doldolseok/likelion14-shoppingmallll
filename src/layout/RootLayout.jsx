import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import { DeleteModalProvider } from "../context/DeletemodalContext";

export default function RootLayout() {
    return (
        <DeleteModalProvider>
            <Header />
            <Outlet />
        </DeleteModalProvider>
    );
}