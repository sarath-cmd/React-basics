import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Showhide from './components/Showhide';
import Progressbar from './components/Progressbar';
import Formdata from './components/Formdata';
import Hovercounter from './components/Hovercounter'
import Enableanddisablebtn from './components/Enableanddisablebtn'
import Localstorage from './components/Localstorage';
import Temperatureconvertor from './components/Temperatureconvertor';
import Copytoclipboard from './components/Copytoclipboard';
import Lightanddarktheme from './components/Lightanddarktheme';

function App() {
  return (
    <>
    <Showhide />
    <Navigation />
    <Routes>
      <Route path="/Showhide" element={<Showhide />} />
      <Route path="/Progressbar" element={<Progressbar />} />
      <Route path="/Formdata" element={<Formdata />} />
      <Route path="/Hovercounter" element={<Hovercounter />} />
      <Route path="/Enableanddisablebtn" element={<Enableanddisablebtn />} />
      <Route path="/Localstorage" element={<Localstorage />} />
      <Route path="/Temperatureconvertor" element={<Temperatureconvertor />} />
      <Route path="/Copytoclipboard" element={<Copytoclipboard />} />
      <Route path="/Lightanddarktheme" element={<Lightanddarktheme />} />
    </Routes>
  </>
  );
}

export default App;
