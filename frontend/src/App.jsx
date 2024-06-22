import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
