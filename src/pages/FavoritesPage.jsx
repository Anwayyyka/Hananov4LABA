import useFavorites from "../hooks/useFavorites";

function FavoritesPage() {
    const { favorites, removeFavorite } = useFavorites();

    const handleRemove = (catId) => {
        removeFavorite(catId);  // Функция для удаления котика по id
    };

    return (
        <div>
            <h2>Избранные котики</h2>
            <ul>
                {favorites.map((cat) => (
                    <li key={cat.id}>
                        <h3>{cat.name}</h3>
                        <img src={cat.image?.url || "/placeholder.jpg"} alt={cat.name} width={200} />
                        <button onClick={() => handleRemove(cat.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritesPage;
