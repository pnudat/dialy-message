import { Container ,Row ,Col ,Button ,Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [attraction, setAttraction] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.melivecode.com/api/attractions")
      .then(res => res.json())
      .then(
        (result) => {
          setAttraction(result);
        },
      )
  }, [])

  return(
    <div>
      <Container>
      <Row>
        {attraction.map(attraction => (
          <Col xs={12} sm={6} key={attraction.id}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={attraction.coverimage} />
              <Card.Body>
                  <Card.Title>{attraction.name}</Card.Title>
                  <Card.Text className='text-truncate'>
                    {attraction.detail}
                  </Card.Text>
                  <Button variant="primary">See More</Button>
              </Card.Body>
            </Card>
          </Col> 
        ))}
      </Row>
      </Container>
    </div>
  );
}

export default App;