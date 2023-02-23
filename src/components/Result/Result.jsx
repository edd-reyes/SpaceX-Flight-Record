import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Results.scss";

const Result = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.spacexdata.com/v5/launches/"
        );
        setResults(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const output = results.map((result) => {
    let launchYear = new Date(result.date_utc).getFullYear().toString();

    return (
      <div className="output" key={result.id}>
        <img
          className="result-image"
          src={result.links.patch.small}
          alt="rocket-img"
          loading="lazy"
        />
        <div className="details">
          <h2>
            Flight Number {result.flight_number} : {result.name} ({launchYear})
          </h2>
          <span>DETAILS:</span><p>{result.details ? result.details : "N/A"}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="output-result">
        {output}
    </div>
    );
};

export default Result;
