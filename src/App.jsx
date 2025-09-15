import Header from "./Components/Header";
import Display from "./Components/DisplayCard";
import Footer from "./Components/Footer";
import { CityProvider } from "./context/CityContext";
function App() {
  return (
    <CityProvider>
      <main className="w-full min-h-screen p-4 flex-col flex flex-col">
        <Header />
        <Display />
        <Footer />
      </main>
    </CityProvider>
  );
}

export default App;
