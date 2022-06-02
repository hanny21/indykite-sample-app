import { NavLink } from "react-router-dom";
// locals
import routes from "../routes";

const LINKS = [
  { id: 1, label: "Login", url: routes.login },
  { id: 2, label: "Register", url: routes.register },
  { id: 3, label: "Forgotten Password", url: routes.forgottenPassword },
];

const Menu = () => {
  return (
    <div className="max-w-md	mx-auto row text-green-500">
      <ul>
        {LINKS.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.url}
              className={({ isActive }) => `block p-2 rounded 
                  ${
                    isActive
                      ? "font-extrabold navigation-link-active"
                      : "hover:font-extrabold hover:text-white"
                  }`}
            >
              <div className="mr-2 navigation-link-indicator-wrapper">
                <span className="navigation-link-indicator">&gt;</span>
              </div>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
