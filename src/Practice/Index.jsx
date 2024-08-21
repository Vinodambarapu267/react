import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/photos";

const Final = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (apiURL) => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(apiURL);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(URL);
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h1 style={{ color: "red" }}>loading...</h1>;
  }
  if (isError) {
    return <h3>Something went wrong...</h3>;
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="photos"
          placeholder="Search photos"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <hr />
      <ul>
        {filteredData.map((eachObj) => (
          <li key={eachObj.id}>
            <div>
              <h2>{eachObj.title}</h2>
              <img src={eachObj.thumbnailUrl} alt={eachObj.title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Final;
