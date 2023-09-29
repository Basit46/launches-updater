import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasswordCheck = ({ setPassed }) => {
  const navigate = useNavigate();
  const password = "venus567";

  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const viewList = () => {
    if (text.trim().toLowerCase() == password) {
      navigate("/launches");
      setError(false);
      setPassed(true);
    } else {
      setError(true);
      setPassed(false);
    }
  };

  useEffect(() => {
    if (text == "") {
      setError(false);
    }
  }, [text]);
  return (
    <div className=" text-black h-full w-full flex flex-col justify-center items-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-[20px] py-[10px] border-black border-2"
        placeholder="Enter Password"
        type="text"
      />
      {error && <p className="text-[red]">Incorrect Password</p>}
      <button
        onClick={viewList}
        className="mt-[20px] bg-[green] w-[150px] h-[50px] active:w-[145px] active:h-[49px] text-white"
      >
        ENTER
      </button>
    </div>
  );
};

export default PasswordCheck;
