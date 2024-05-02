import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import PortfolioSections from "./components/PortfolioSections";

function App() {
  return (
    <div className="max-w-4xl m-auto relative">
      <Navbar />
      <PortfolioSections />
      <Footer />
    </div>
  );
}

export default App;
