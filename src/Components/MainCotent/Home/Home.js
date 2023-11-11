import React, { useContext, useEffect } from "react";
import Movies from "./Movies";
import DataContext from "../../../store/data-context";

const MovieList = (props) => {
  const dataContext = useContext(DataContext);

 const fetchData = async () => {
  try {
    dataContext.setFetchingData("Fetching data from server....");
    const obj = {
      category: "movies",
      language: "Kannad",
      genre: "all",
      sort: "voting",
    };

    const response = await fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add the following line:
        "Access-Control-Allow-Origin": "https://09sanket.github.io",
      },
      body: JSON.stringify(obj),
    });

    const result = await response.json();

    if (result.error) {
      let errorMessage = "Something went wrong!...";
      if (result.error && result.error.message) {
        errorMessage = result.error.message;
      }
      throw new Error(errorMessage);
    } else {
      console.log(result.result[20]);
      dataContext.setMoviesList(result.result);
    }
  } catch (err) {
    alert(err.message);
  } finally {
    dataContext.setFetchingData("");
  }
};


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Your previous code */}
      <div>
        {/* Add any additional components or JSX as needed */}
      </div>

      {/* Render your component here */}
      <Movies />
    </>
  );
};

export default MovieList;
