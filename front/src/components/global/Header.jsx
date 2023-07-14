import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ROUTE } from "../../routes/routes"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-400 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Link to={ROUTE.HOME.link} className="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Damchae
          </Link>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-blue-700"
                aria-current="page"
              >
                대나무숲
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-blue-700"
              >
                내 스토리
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-semibold text-white rounded md:bg-transparent md:p-0 hover:text-blue-700"
              >
                <UserCircleIcon className="h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
