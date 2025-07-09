import React from "react";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import { NotificationProvider } from "./components/NotificationContext";
import Notification from "./components/Notification";
function App() {
  return (
    <div>
   
      {/* <Question1 /> */}
      {/* <Question2 /> */}
      {/* <Question3 /> */}
      <NotificationProvider>
        <Notification/>
      </NotificationProvider>
    </div>
  );
}

export default App;
