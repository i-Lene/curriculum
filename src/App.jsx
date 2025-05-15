import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
