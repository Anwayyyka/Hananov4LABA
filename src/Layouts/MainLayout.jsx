import { Link } from "react-router-dom";
import "../styles/App.css";

function MainLayout({ children }) {
    return (
        <div className="container">
            <header className="header">
                <h1>Галерея Котиков</h1>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/favorites">Избранное</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;