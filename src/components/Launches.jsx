import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Navbar from "./Navbar";
import Launch from "./Launch";
import { useNavigate } from "react-router-dom";

const Launches = ({ passed }) => {
  const navigate = useNavigate();

  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!passed) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    onSnapshot(collection(db, "events"), (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLaunches(updatedData);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <Navbar />

      {isLoading && (
        <h1 className="mt-[20px] text-[1.5rem] font-black text-center">
          Loading...
        </h1>
      )}
      {launches &&
        launches.map((launch, index) => (
          <Launch key={launch.id} launch={launch} index={index} />
        ))}
    </div>
  );
};

export default Launches;
