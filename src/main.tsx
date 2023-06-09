import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum } from "wagmi/chains";

declare global {
  interface Window {
    ethereum: any;
  }
}

const chains = [arbitrum];

const projectId = "YOUR_PROJECT_ID";
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),

  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    
    <WagmiConfig config={wagmiConfig}>
      <Router>
        <App />
        <ToastContainer/>
      </Router>
    </WagmiConfig>
    <Web3Modal
      projectId={projectId}
      ethereumClient={ethereumClient}
      defaultChain={arbitrum}
    />
  </React.StrictMode>
);
