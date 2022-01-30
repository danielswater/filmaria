import './css/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Filmaria</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favoritos">Favoritos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}