import React, { useEffect, useState } from "react";
import "./Craousel.css";

export default function Craousel() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.coins);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <div className="cryptocontainer">
          <div className="crycontainer">
            {users.map((user, index) => (
              <div key={index} className="imagecont">
                
                <div className="contentcont">
                  <img
                  className="coinImage"
                    
                    src={user.item?.large}
                    alt="coins"
                  ></img>
                </div>
                <div
                  style={{
                    marginLeft: "3.3rem",
                    marginTop: "-1.5rem",
                    display: "flex",
                  }}
                >
                  {user.item.id}
                </div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    marginLeft: "3.3rem",
                    marginTop: "0.5rem",
                    display: "flex",
                    
              
                  }}
                >
                  ${user.item?.price_btc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <pre style={{ textAlign: "start" }}>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
  );
}
