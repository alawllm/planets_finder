import { Route,Routes } from "react-router-dom";

import About from "./routes/about-me/about-me.component";
import Home from "./routes/home/home.component";
import InfoPage from "./routes/info-page/info-page.component";
import Navigation from "./routes/navigation/navigation.component";
import OwnPlanet from "./routes/own-planet/own-planet.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/own-planet" element={<OwnPlanet />} />
        <Route path="/info-page" element={<InfoPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
