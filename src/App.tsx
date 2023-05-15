import Home from "./pages/Home";
import ConnectWallet from "./pages/connectWallet";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connectWallet" element={<ConnectWallet />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
