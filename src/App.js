import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./Layouts/Navigation";
import Home from "./Pages/Home";
import Bingo from "./Pages/Bingo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="bingo" element={<Bingo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
