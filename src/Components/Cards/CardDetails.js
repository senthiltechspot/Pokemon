import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetails = () => {
  const params = useParams();
  console.log(params.pokename);
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokename}`;

  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(url);
      console.log("axios Triggered");
      setFetchedData(data);
    };

    console.log("useEffect Triggered");
    getData();
  }, [url]);
  console.log("Data", fetchedData);
  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };
  return (
    <div className="d-flex justify-content-center">
      {/* card component */}
      <div
        className="card d-flex flex-wrap justify-content-evenly gap-3"
        style={{ width: "50%", backgroundColor: randColor() }}
      >
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
            fetchedData && fetchedData.id
          }.svg`}
          class="card-img-top p-4"
          alt="..."
          height={"200px"}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ textShadow: "0 0 6px #FFFFFF" }}>
            {params.pokename.toUpperCase()}
          </h5>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item">
            Total Moves : {fetchedData && fetchedData.moves.length}
          </li>
          <li className="list-group-item">
            {fetchedData &&
              fetchedData.abilities.map((e, i) => (
                <li className="list-group-item">
                  Ability {i + 1} : {e.ability.name}
                </li>
              ))}
          </li>
          <li className="list-group-item">
            {fetchedData &&
              fetchedData.types.map((e, i) => (
                <li className="list-group-item">
                  Type {i + 1} : {e.type.name}{" "}
                </li>
              ))}
          </li>
        </ul>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default CardDetails;
