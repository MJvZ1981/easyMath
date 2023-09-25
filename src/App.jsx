import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splice from "./pages/Splice";
import HomePage from "./pages/HomePage";
import Addition from "./pages/Addition";
import Subtraction from "./pages/Subtraction";
import Multiplication from "./pages/Multiplication";
import Divsion from "./pages/Divsion";

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
