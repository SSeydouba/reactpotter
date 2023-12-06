//import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Gryffindor from "./Containers/Gryffindor/Gryffindor.js"
import Hufflepuff from "./Containers/Hufflepuff/Hufflepuff.js";
import Header from "./Components/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Hero />
        <Routes>
          <Route path="/gryffindor" element={<Gryffindor/>}/>
          <Route path="/hufflepuff" element={<Hufflepuff/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
