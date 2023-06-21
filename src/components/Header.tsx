import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
// npm install react-icons --save

import { FaBtc, FaSignOutAlt } from "react-icons/fa";

const Header: FC = () => {
  const isAuth = true;
  return (
    <header className="flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
      <Link to="/">
        <FaBtc size={20} />
      </Link>
      {isAuth && (
        <nav className="ml-auto mr-10">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transaction"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Transaction
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {isAuth ? (
        <button className="btn btn-red">
          <span>Log out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link to="/auth" className="ml-auto py-2 text-white/50 hover:text-white">
          Log in / Sign in
        </Link>
      )}
    </header>
  );
};

export default Header;