import React, { useEffect, useState } from "react";

const URL = "https://fakestoreapi.com/products";
const Final = () => {
  const [food, setFood] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [IsError, setIsError] = useState(false);
  const Food = async (apiURL) => {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setFood(data);
      setIsError(false);
    } catch (error) {}

    useEffect(() => {
      Food(apiURL);
    }, [searchTerm]);
  };
  return (
    <div>
      <form action="">
        <h1>Food Details</h1>
        <input
          type="text"
          name="search"
          placeholder="serach some food"
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </form>
      <hr />
      <ul>
        {food.map((eachObj) => {
          const { id, title, category, image } = eachObj;
          return (
            <li key={id}>
              <div>
                <img src={image} alt={category} />
              </div>
              <div className="text">
                <h3>{title}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Final;
