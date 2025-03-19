import CatItem from "./CatItem";

function CatList({ cats }) {
    return (
        <ul>
            {cats.map((cat) => (
                <CatItem key={cat.id} cat={cat} />
            ))}
        </ul>
    );
}

export default CatList;
