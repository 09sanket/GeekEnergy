import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MovieItem from "./MovieItem";
import DataContext from "../../../store/data-context";

export default (props) => {
  const dataContext = useContext(DataContext);
  const fetchingData=dataContext.fetchingData;
  const movies = dataContext.moviesList;
  const movieList = movies.map((movie) => {
    return <MovieItem movie={movie} key={movie._id} />;
  });
  return (
    <Container className="mt-5">
      <center>
        <h1>Movies List</h1>
        <h5>
          <center>
            <h5 className="fst-italic text-muted">{fetchingData}</h5>
          </center>
        </h5>
        {movieList}
      </center>
    </Container>
  );
};
