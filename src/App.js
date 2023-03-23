import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import TopHeader from "./Components/TopHeader/TopHeader";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />
      <Home/>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
