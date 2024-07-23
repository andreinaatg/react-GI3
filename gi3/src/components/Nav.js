import { Link } from "react-router-dom";
import './nav.css'
function Navbar() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/counter">Counter</Link>
             </li>
             <li>
                 <Link to="/movieFinder">Movie</Link>
             </li>
             <li>
                 <Link to="/todoList">todoList</Link>
             </li>
        </ul>
    </nav>
    </>
  );
}

export default Navbar;

