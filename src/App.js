import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoesNotExist from "./pages/DoesNotExist";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<DoesNotExist />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
