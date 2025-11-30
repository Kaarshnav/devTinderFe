import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
