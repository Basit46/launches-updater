import React, { useState } from "react";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Launch = ({ launch, index }) => {
  const [status, setStatus] = useState(launch.isLive ? "Live" : "Rugged");
  const [percent, setPercent] = useState(launch.gain);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateFirebase = async () => {
    setIsUpdating(true);
    const docRef = doc(db, "events", launch.id);
    await updateDoc(docRef, {
      isLive: status == "Live" ? true : false,
      gain: percent,
    });
    setIsUpdating(false);

    alert("Launch Updated");
  };

  return (
    <div className="mb-[10px] border-b-[2px] border-black py-[20px] px-[20px] flex gap-[10px]">
      <p>{index + 1}.</p>
      <div>
        <h1>NAME: {launch.name}</h1>
        <div className="mt-[10px]">
          {launch.isLive && (
            <p className="font-bold">
              Current Status:{" "}
              <span className="text-[green]">
                {"Live" + " " + launch.gain + "x"}
              </span>
            </p>
          )}

          {!launch.isLive && (
            <p className="font-bold">
              Current Status: <span className="text-[red]">Rugged</span>
            </p>
          )}
        </div>

        <div className="mt-[10px] flex gap-[10px] items-center">
          <p className="font-bold">Set Status:</p>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border-[2px] border-black outline-none"
          >
            <option value="Live">Live</option>
            <option value="Rugged">Rugged</option>
          </select>
        </div>

        <div className="mt-[10px] flex gap-[10px] items-center">
          <p className="font-bold">Set Gain Percent:</p>
          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(parseFloat(e.target.value))}
            className="w-[100px] border-[2px] border-black outline-none"
          />
        </div>

        <button
          onClick={updateFirebase}
          className="mt-[10px] bg-[green] text-white px-[10px] py-[5px] active:text-[red]"
        >
          {isUpdating ? "Updating..." : "ADD STATUS"}
        </button>
      </div>
    </div>
  );
};

export default Launch;
