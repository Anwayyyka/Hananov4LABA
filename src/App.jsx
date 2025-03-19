import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatDetailsPage from "./pages/CatDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:id" element={<CatDetailsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </MainLayout>
    );
}

export default App;