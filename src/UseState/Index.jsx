import React, { useEffect, useState } from "react";
// import Form from "./UseState/Form";
const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
const Index = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setloading] = useState(false);
  const [IsError, setIsError] = useState({ status: false, msg: "" });
  const fetchDrink = async (apiURL) => {
    setloading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiURL);
      const { drinks } = await response.json();
      setDrinksData(drinks);
      setloading(false);
      setIsError({ status: false, msg: "" });
      if (!drinks) {
        throw new Error("DATA NOT FOUND");
      }
    } catch (error) {
      console.log(error);
      setloading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong...",
      });
    }
  };
  useEffect(() => {
    const correctURL = `${URL}${searchTerm}`;
    fetchDrink(correctURL);
  }, [searchTerm]);
  console.log(setDrinksData);
  return (
    <>
      <br />
      <form>
        <strong>
          <input
            type="text"
            name="search"
            id="search"
            title={searchTerm}
            placeholder="PLEASE SELECT "
            onChange={(e) => setSearchTerm(e.target.title)}
          />
        </strong>
      </form>
      <hr />
      {loading && !IsError?.status && (
        <h3 style={{ color: "#ff7f90" }}>Loading...</h3>
      )}
      {IsError?.status && <h1 style={{ color: "red" }}>{IsError.msg}</h1>}
      {!loading && !IsError?.status && (
        <ul className="cocktail-data">
          {drinksData.map((eachDrink) => {
            const { idDrink, strDrink, strDrinkThumb } = eachDrink;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div className="text">
                  <h3>{strDrink}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Index;
