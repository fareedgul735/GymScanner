import { useEffect, useState } from "react";
import { Descriptions } from "./assets/labels/labels";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center 
        bg-black/60 backdrop-blur-md z-[9999] text-center gap-8 px-6"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full border-4 border-red-500 opacity-20 animate-ping"></div>
          <div className="absolute w-16 h-16 rounded-full border-4 border-red-500 opacity-40 animate-pulse"></div>
          <div className="w-10 h-10 rounded-full bg-red-600 shadow-lg shadow-red-900"></div>
        </div>

        <p className="text-red-400 text-2xl font-bold tracking-wide animate-pulse drop-shadow-md">
          {Descriptions.InternetIssue || "No Internet Connection"}
        </p>
      </div>
    );
  }

  return null;
};

export default NetworkStatus;
