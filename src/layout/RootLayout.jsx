import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import { DeleteModalProvider } from "../context/DeleteModalContext";

export default function RootLayout() {
    return (
        <DeleteModalProvider>
            <Header />
            <Outlet />
        </DeleteModalProvider>
    );
}