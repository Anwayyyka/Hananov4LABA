import { useState, useEffect } from "react";

function useFavorites() {
    const [favorites, setFavorites] = useState([]);

    // Загружаем избранное из localStorage при первом рендере
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
    }, []);

    // Функция для добавления котика в избранное
    const addFavorite = (cat) => {
        const updated = [...favorites, cat];
        const unique = updated.filter(
            (item, index, self) => index === self.findIndex((i) => i.id === item.id)
        );
        localStorage.setItem("favorites", JSON.stringify(unique));
        setFavorites(unique);
    };

    // Функция для удаления котика из избранного
    const removeFavorite = (catId) => {
        const updatedFavorites = favorites.filter((cat) => cat.id !== catId);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    return { favorites, addFavorite, removeFavorite };
}

export default useFavorites;
