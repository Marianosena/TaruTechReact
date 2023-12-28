import CartWidget from "../CartWidget/CartWidget";  
import './NavBar.css'

const NavBar = () => {
return (
    <header>
        <h1>TaruTech</h1>

        <nav>
            <ul>
                <li>Accesorios</li>
                <li>Notebook</li>
                <li>Componentes</li>
                <li>Teclados</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
)
}

export default NavBar