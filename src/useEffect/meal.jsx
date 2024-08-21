import React, { useEffect, useState } from "react";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Meal = () => {
  const [mealsData, setMealsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchMeal = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      if (data.meals) {
        setMealsData(data.meals);
      } else {
        setMealsData([]);
        throw new Error("No meals found. Please try again.");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong...",
      });
      window.alert(error.message || "Please Enter valid input");
    }
  };

  useEffect(() => {
    const correctURL = `${URL}${searchTerm}`;
    fetchMeal(correctURL);
  }, [searchTerm]);

  return (
    <>
      <br />
      <form>
        <strong>
          <input
            type="text"
            name="search"
            id="search"
            title="Search for meals"
            placeholder="PLEASE SELECT"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </strong>
      </form>
      <hr />
      {loading && !isError.status && (
        <div>
          <h1 style={{ color: "red" }}>Loading...</h1>
        </div>
      )}
      {isError.status && <h1 style={{ color: "red" }}>{isError.msg}</h1>}
      {!loading && !isError.status && mealsData.length === 0 && (
        <h2>No meals found. Try searching for something else.</h2>
      )}
      {!loading && !isError.status && mealsData.length > 0 && (
        <ul className="meal-data">
          {mealsData.map((eachMeal) => {
            const { idMeal, strMeal, strMealThumb } = eachMeal;
            return (
              <li key={idMeal}>
                <div>
                  <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="text">
                  <h3>{strMeal}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Meal;
