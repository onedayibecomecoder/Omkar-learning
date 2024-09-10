import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { getUserData } from "./services";

const RenderData = (i, index) => (
  <div key={index}>
    <h1>{i.title}</h1>
    <p>{i.body}</p>
    <br />
  </div>
);

function App() {
  const [userData, setUserData] = useState([]);

  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState("");

  const goToNextPage = () => {
    setPageNo((prev) => {
      if (userData.length <= pageNo * 10) return pageNo;
      else return prev + 1;
    });
  };

  const goTOPreviousPage = () => {
    setPageNo((prev) => {
      if (prev === 1) return 1;
      else return prev - 1;
    });
  };

  const search = (event) => {
    const value = event.target.value;
    setSearchText(value);
  };

  useEffect(() => {
    getUserData(setUserData);
  }, []);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const filter = (i) => i.title.includes(searchText) && i.body.includes(searchText);
  return (
    <div className="App">
      <input type="search" onChange={search} />

      {userData
        .filter(filter)
        .slice(0, 10 * pageNo)
        .map(RenderData)}

      {userData.length <= pageNo * 10 ? (
        <> </>
      ) : (
        <button onClick={goToNextPage}>Load More Data</button>
      )}
      {pageNo === 1 ? (
        <> </>
      ) : (
        <button onClick={goTOPreviousPage}>Previous Page</button>
      )}
    </div>
  );
}

export default App;
