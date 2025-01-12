import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function Navbar() {
  const {isAuthenticated, logoutUser} = useContext(AuthContext)


  return (
    <nav className="w-1/2 flex justify-around items-center gap-3 bg-slate-300 p-3 rounded-2xl mb-4">
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
        <Link to="/posts" className="text-gray-700 hover:text-blue-500 font-medium">
          Posts
        </Link>
        <div as="div" className="ml-3">
              <div>
                <button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    alt=""
                    src={isAuthenticated ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s'}
                    className="size-8 rounded-full"
                  />
                </button>
              </div>
              <div
                className="absolute right-0 top-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
              >
              {!isAuthenticated ? (
                <>
                  <div>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign up
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Login
                  </Link>
                </div>
                </>
              )
                : (
                  <>
                  <div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Profile
                  </Link>
                </div>
                <div>
                  <button
                    onClick={logoutUser}
                    className="block px-4 py-2 text-sm text-gray-700 font-semibold data-[focus]:bg-gray-100 data-[focus]:outline-none hover:text-blue-500"
                  >
                    Logout
                  </button>
                </div>
                </>
                )
            }
              </div>
            </div>
    </nav>
  );
}

export default Navbar;