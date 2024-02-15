import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./Layouts/Navigation";
import Home from "./Pages/Home";
import Sports from "./Pages/Sports";
import Slots from "./Pages/Slots";
import Casino from "./Pages/Casino";
import Ebingo from "./Pages/Ebingo";
import Promotions from "./Pages/Promotions";
import GameWindow from "./Pages/GameWindow";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sports" element={<Sports />} />
          <Route path="ebingo" element={<Ebingo />} />
          <Route path="slots" element={<Slots />} />
          <Route path="casino" element={<Casino />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="redirect" element={<GameWindow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
