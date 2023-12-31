import {Link} from 'react-router-dom'

const Header = () => (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/cart'>Cart</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
        </ul>
    </nav>
)

export default Header