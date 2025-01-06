import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-around">
        <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
          Home
        </Link>
        <Link to="/users" className="text-gray-700 hover:text-blue-500 font-medium">
          Users 
        </Link>
        <Link to="/hello" className="text-gray-700 hover:text-blue-500 font-medium">
          Hello
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;