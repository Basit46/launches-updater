import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Launches from "./components/Launches";
import PasswordCheck from "./components/PasswordCheck";

const App = () => {
  const [passed, setPassed] = useState(false);
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<PasswordCheck setPassed={setPassed} />} />
        <Route path="/launches" element={<Launches passed={passed} />} />
      </Routes>
    </div>
  );
};

export default App;
