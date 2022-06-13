import React, { useState, useEffect } from "react";
import axios from "axios";

const stats = () => {
  const [times, setTimes] = useState([{}]);

  const fetchTimes = async () => {
    const response = await axios({
      method: "get",
      url: "/api/stats/",
    });
    setTimes(response.data);
  };
  useEffect(() => {
    fetchTimes();
  }, []);

  return (
    <div>
      {times.map((time) => {
        return (
          <div>
            <div>{time._id}</div>
            <div>{time.total}</div>
          </div>
        );
      })}
    </div>
  );
};

export default stats;
