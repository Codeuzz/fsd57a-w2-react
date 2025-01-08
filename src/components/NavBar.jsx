import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-1/2 flex justify-around gap-3 bg-slate-300">
        <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
          Home
        </Link>
        <Link to="/users" className="text-gray-700 hover:text-blue-500 font-medium">
          Users 
        </Link>
        <Link to="/hello" className="text-gray-700 hover:text-blue-500 font-medium">
          Hello
        </Link>
        <Link to="/weather" className="text-gray-700 hover:text-blue-500 font-medium">
          Weather
        </Link>
        <Link to="/musics" className="text-gray-700 hover:text-blue-500 font-medium">
          Musics
        </Link>
    </nav>
  );
}

export default Navbar;