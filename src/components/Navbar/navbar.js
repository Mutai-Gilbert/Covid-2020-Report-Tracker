import { Link } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

const Navbar = () => (
  <div className="nav">
    <Link to="/" className="backicon"><FaLessThan /></Link>
    <div className="header">
      <h1 className="head">Covid 2019</h1>
    </div>
  </div>
);

export default Navbar;
