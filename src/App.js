import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import TopHeader from "./Components/TopHeader/TopHeader";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
