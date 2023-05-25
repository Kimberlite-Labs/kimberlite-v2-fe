import Home from "./pages/Home";
import ConnectWallet from "./pages/ConnectWallet";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre" element={<ConnectWallet />} />
          <Route path="/pre/:upline" element={<ConnectWallet />} />
          <Route path="/pre/*" element={<ConnectWallet />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
