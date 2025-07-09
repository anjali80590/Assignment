import React, { createContext, useState } from "react";
export let NotificationContext = createContext();
export let NotificationProvider = ({ children }) => {
  let [message, setMessage] = useState("");
  let [type, setType] = useState("");
  function showNotification() {
    setMessage("user notified")
     setType("About Project")
     alert("user notified")
  }
  return (
    <>
      <NotificationContext.Provider value={{ message, type, showNotification }}>
        {children}
      </NotificationContext.Provider>
    </>
  );
};
