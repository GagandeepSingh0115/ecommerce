import "./css/index.css";
import "./css/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Wishlist } from "./pages/Wislist";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { NavBar } from "./components/NavBar";
import { Snakbar } from "./components/Snakbar";
import { useSnakbarContext } from "./Context";
import { useAuthContext } from "./Context";

const UserNotReachableRoute = ({ path, ...props }) => {
  const { user } = useAuthContext();
  return !user ? <Route path={path} {...props} /> : <Navigate replace to="/" />;
};

export default function App() {
  const { snakbarStatus } = useSnakbarContext();
  return (
    <main>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <UserNotReachableRoute path="/login" element={<Login />} />
      </Routes>
      {snakbarStatus["isShow"] === true && <Snakbar></Snakbar>}
    </main>
  );
}
