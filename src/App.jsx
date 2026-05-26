import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Main from "./pages/Main/Main.jsx";
import ItemDetail from "./itemDetail/ItemDetail.jsx";
import Register from "./pages/Main/Register/Register.jsx"
import Edit from "./pages/Main/Edit/Edit.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/item/:type/:id" element={<ItemDetail />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/item/:type/:id/edit" element={<Edit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;