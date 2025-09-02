import Header from "./Components/Header/Header";
import Display from "./Components/DisplayCard/DisplayCard";

import { CityProvider } from "./context/CityContext";
function App() {
  return (
    <CityProvider>
      <Header />
      <Display />
    </CityProvider>
  );
}

export default App;
