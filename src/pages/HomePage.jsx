import { useState, useEffect } from "react";
import axios from "axios";
import CatList from "../components/CatList";

function HomePage() {
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState("");
    const [minWeight, setMinWeight] = useState("");
    const [maxWeight, setMaxWeight] = useState("");
    const [minLifespan, setMinLifespan] = useState("");
    const [maxLifespan, setMaxLifespan] = useState("");

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
            setCats(res.data);
        });
    }, []);

    const filteredCats = cats.filter((cat) => {
        // Фильтрация по поисковому запросу
        const matchesSearch = cat.name.toLowerCase().includes(search.toLowerCase());

        // Фильтрация по весу
        const matchesWeight =
            (!minWeight || cat.weight.metric >= minWeight) &&
            (!maxWeight || cat.weight.metric <= maxWeight);

        // Фильтрация по продолжительности жизни
        const matchesLifespan =
            (!minLifespan || cat.life_span >= minLifespan) &&
            (!maxLifespan || cat.life_span <= maxLifespan);

        return matchesSearch && matchesWeight && matchesLifespan;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск породы..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
            <div>
                <label>Минимальный вес (кг):</label>
                <input
                    type="number"
                    value={minWeight}
                    onChange={(e) => setMinWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Максимальный вес (кг):</label>
                <input
                    type="number"
                    value={maxWeight}
                    onChange={(e) => setMaxWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Минимальная продолжительность жизни (лет):</label>
                <input
                    type="number"
                    value={minLifespan}
                    onChange={(e) => setMinLifespan(e.target.value)}
                />
            </div>
            <div>
                <label>Максимальная продолжительность жизни (лет):</label>
                <input
                    type="number"
                    value={maxLifespan}
                    onChange={(e) => setMaxLifespan(e.target.value)}
                />
            </div>

            <CatList cats={filteredCats} />
        </div>
    );
}

export default HomePage;
