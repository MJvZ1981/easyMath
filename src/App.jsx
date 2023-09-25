import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splice from "./Pages/Splice";
import HomePage from "./Pages/HomePage";
import Addition from "./Pages/Addition";
import Subtraction from "./Pages/Subtraction";
import Multiplication from "./Pages/Multiplication";
import Divsion from "./Pages/Divsion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/splitsen" element={<Splice />} />
          <Route path="/plus" element={<Addition />} />
          <Route path="/min" element={<Subtraction />} />
          <Route path="/keer" element={<Multiplication />} />
          <Route path="/delen" element={<Divsion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
