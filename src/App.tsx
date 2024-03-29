import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StockData from "./pages/StockData";

function App() {
  return (
    <div className="site">
      <Navbar />
      <main className="container mx-auto px-4">
        <StockData />
      </main>
      <Footer />
    </div>
  );
}

export default App;
