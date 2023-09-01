
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <ul>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="posts">Posts</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
