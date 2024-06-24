import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
