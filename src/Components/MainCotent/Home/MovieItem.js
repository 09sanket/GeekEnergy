import { Row, Col, Card, Button } from "react-bootstrap";
import "./MoviesItem.css";
export default (props) => {
  const movie = props.movie;

  const releaseDate = new Date(movie.releasedDate);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const date = {
    day: releaseDate.getDay(),
    month: months[releaseDate.getMonth()],
    year: releaseDate.getFullYear(),
  };

  return (
    <Card key={movie.id} className="mb-3 movie-card">
      
      <Row>
      
        <Col sm={4}>
          <Card.Img src={movie.poster} className="image" alt={movie.title} />
        </Col>
       
        <Col sm={8} className="text-start">
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <strong>Genre:</strong> {movie.genre}
            </Card.Text>
            <Card.Text>
              <strong>Director:</strong> {movie.director}
            </Card.Text>
            <Card.Text>
              <strong>Starring:</strong> {movie.stars}
            </Card.Text>
            <Card.Text>
              <strong>Language:</strong> {movie.language}
            </Card.Text>
            <Card.Text>
              <strong>Total Views:</strong> {movie.pageViews}
            </Card.Text>
            <Card.Text>
              <strong>Release Date:</strong> {date.day}
              {"-"}
              {date.month}
              {"-"}
              {date.year}
            </Card.Text>
            <Button variant="primary" target="_blank">
              Watch Trailer
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
