import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Products = ({ data }) => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        {data.map((item, index) => (
          <div className='col-md-4 mb-4' key={index}>
            <Card>
              <Card.Img variant="top" src={item.recipe.image} alt={item.recipe.label} />
              <Card.Body>
                <Card.Title>{item.recipe.label}</Card.Title>
                <Card.Text>
                  Calories: {Math.round(item.recipe.calories)}
                </Card.Text>
                <Button variant="primary" href={item.recipe.url} target="_blank">View Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
