import { Link } from "react-router-dom";
// locals
import routes from "../routes";

const Header = () => {
  return (
    <header className="bg-green-600 text-white text-center p-4 text-2xl">
      <Link to={routes.home} className="p-2">
        IndyKite Terminal
      </Link>
    </header>
  );
};

export default Header;
