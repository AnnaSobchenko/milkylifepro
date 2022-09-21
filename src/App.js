import "./App.scss";
import { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

import Loader from "./components/_shared/Loader/Loader";
import AppBar from "./components/_navigations/AppBar/AppBar";
import PrivateRoute from "./components/_routs/PrivatRoute";
import PublicRoute from "./components/_routs/PublicRoute";
import { getIsAdmin } from "./redux/auth/authSelector";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Footer from "./components/_navigations/Footer/Footer";
import { getTheme } from "./redux/theme/themeSelector";
import UsersPage from "./pages/UsersPage/UsersPage";
import MamaMarafonPage from "./pages/MamaMarafonPage/MamaMarafonPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";

function App() {
  const isAdmin = useSelector(getIsAdmin);
  const theme = useSelector(getTheme);

  return (
    <div
      className="content"
      style={{
        backgroundColor:
          theme === "light"
            ? "var(--primary-bg-color)"
            : "var(--third-bg-color)",
        color:
          theme === "light"
            ? "var(--secondary-text-color)"
            : "var(--third-text-color)",
        fill:
          theme === "light"
            ? "var(--secondary-text-color)"
            : "var(--third-text-color)",
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<MainPage />} />
            <Route path="/mama-marafon" element={<MamaMarafonPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              {isAdmin && <Route path="users" element={<UsersPage />} />}
              <Route path="/" element={<MainPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
