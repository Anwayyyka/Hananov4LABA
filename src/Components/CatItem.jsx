import { Link } from "react-router-dom";

function CatItem({ cat }) {
    return (
        <li>
            <Link to={`/details/${cat.id}`}>{cat.name}</Link>
        </li>
    );
}

export default CatItem;