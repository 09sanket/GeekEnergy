import { useContext, useEffect } from "react";
import Movies from "./Movies";
import DataContext from "../../../store/data-context";

export default (props) => {
  const dataContext = useContext(DataContext);
  
  function fetchData() {
    dataContext.setFetchingData('Fetching data from server....')
    const obj = {
      category: "movies",
      language: "Kannad",
      genre: "all",
      sort: "voting",
    };
    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        dataContext.setFetchingData('')
        return response.json();
      })
      .then((result) => {
        if (result.error) {
          const data = result;
          let errorMessage = "Something went wrong!...";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        } else {
          console.log(result.result[20]);
          dataContext.setMoviesList(result.result);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      
      <Movies />
    </>
  );
};
