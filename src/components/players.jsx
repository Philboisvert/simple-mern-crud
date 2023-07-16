import React, {useState, useEffect}  from "react";
import "../assets/App.css";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  async function getPlayers() {
    const res = await fetch(`http://localhost:3000/hockeyPlayers`);
    const data = await res.json();
    setPlayers(data);
  }
 
    return (
      <div>
       {players.map((user,i) => (
          <div>
          <span key={i}>{user.firstName}</span>
          <span key={i}>{user.lastName}</span>
          <span key={i}>{user.position}</span>
          <span key={i}>{user.number}</span>
          <span key={i}>{user.shoots}</span>
          </div>
        ))}
      </div>
    );
}

  