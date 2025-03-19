import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useFavorites from "../hooks/useFavorites";

function CatDetailsPage() {
    const { id } = useParams();
    const [cat, setCat] = useState(null);
    const navigate = useNavigate();
    const { addFavorite } = useFavorites();

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
            const foundCat = res.data.find((c) => c.id === id);
            setCat(foundCat);
        });
    }, [id]);

    if (!cat) return <p>Загрузка...</p>;

    return (
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
            <img src={cat.image?.url || "/placeholder.jpg"} alt={cat.name} width={300} />
            <button onClick={() => addFavorite(cat)}>Добавить в избранное</button>
        </div>
    );
}

export default CatDetailsPage;
