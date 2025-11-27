import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <NavBar />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
