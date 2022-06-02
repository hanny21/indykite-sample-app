import { Routes, Route } from "react-router-dom";
// locals
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import Login from "./pages/ui-sdk/Login";
import Register from "./pages/ui-sdk/Register";
import routes from "./routes";
import ForgottenPassword from "./pages/ui-sdk/ForgottenPassword";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      <Header />
      <div className="p-4 grow mx-auto flex w-screen max-w-4xl">
        <nav className="w-1/3 p-4">
          <Menu />
        </nav>
        <main className="w-2/3 p-4">
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.register} element={<Register />} />
            <Route
              path={routes.forgottenPassword}
              element={<ForgottenPassword />}
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
