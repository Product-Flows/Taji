import { useEffect, useState } from "react";

const NetworkChecker = () => {
  const [networkStatus, setNetworkStatus] = useState("");

  useEffect(() => {
    const checkNetworkSpeed = () => {
      if (navigator.connection) {
        const { effectiveType, downlink } = navigator.connection;

        // Define "low network" as slow 2G, 3G, or very low bandwidth
        if (effectiveType === "slow-2g" || effectiveType === "2g" || downlink < 0.5) {
          setNetworkStatus("Your network connection is very slow. Some features may not work properly.");
          alert("Your network is too slow to access this application properly.");
        } else {
          setNetworkStatus("");
        }
      }
    };

    checkNetworkSpeed();

    // Listen for network changes
    navigator.connection?.addEventListener("change", checkNetworkSpeed);

    return () => {
      navigator.connection?.removeEventListener("change", checkNetworkSpeed);
    };
  }, []);

  return networkStatus ? <div style={{ color: "red", fontWeight: "bold" }}>{networkStatus}</div> : null;
};

export default NetworkChecker;
