import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Launch from "./components/Launch";
import Navbar from "./components/Navbar";

const App = () => {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLaunches(updatedData);
    });
  }, []);

  return (
    <div>
      <Navbar />
      {launches &&
        launches.map((launch, index) => (
          <Launch key={launch.id} launch={launch} index={index} />
        ))}
    </div>
  );
};

export default App;
