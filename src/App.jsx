import Header from "./Components/Header";
import Display from "./Components/DisplayCard";
import Footer from "./Components/Footer";
import { CityProvider } from "./context/CityContext";
function App() {
  return (
    <CityProvider>
      <main className="flex min-h-[80vh] my-5 mx-20 border-2 border-gray-300  rounded-2xl flex-col">
        <Header />
        <Display />
        <Footer/>
      </main>
    </CityProvider>
  );
}

export default App;


