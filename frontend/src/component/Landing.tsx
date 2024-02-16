import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/room/?name=${name}`);
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => navigate(`/room/?name=${name}`)}>Join</button>
    </div>
  );
};

export default Landing;
