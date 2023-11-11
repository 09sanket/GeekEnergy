import { useState } from "react";
import DataContext from "./data-context";

export default (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [fetchingData,setFetchingData]=useState("");

  const data = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
    moviesList: moviesList,
    setMoviesList: setMoviesList,
    fetchingData:fetchingData,
    setFetchingData:setFetchingData
  };
  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
