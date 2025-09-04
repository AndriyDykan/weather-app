import Header from "./Components/Header/Header";
import Display from "./Components/DisplayCard/DisplayCard";
import Footer from "./Components/Footer/Footer";
import { CityProvider } from "./context/CityContext";
function App() {
  return (
    <CityProvider>
      <main className="flex  min-h-screen flex-col">
        <Header />
        <Display />
        <Footer />
      </main>
    </CityProvider>
  );
}

export default App;
