import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'

function OpportunityCard(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('http://localhost:8000/posts')
    .then((res) => res.json())
    .then((res) => {
      setPosts(res);  
    })
    .catch(console.error)
    }, []);
    
    return (
        <Card style={{ width: "18rem" }} className="adding-margin">
          <Card.Img variant="top" src={placeholder} />
          <Card.Body>
            <Card.Title>Chicago</Card.Title>
            <Card.Text>
              <section className="container">
            {posts.map((post) => {
        return(
            <Link to={`/details/${posts.id}`} key={posts.id}>
            <div className="card">
                <div className="card-image">
                    
            </div>
                <div className="card-title">
                    <h3>{posts.title}</h3>
                </div>
            </div>
          </Link>
            );
            })} 
      </section>
            </Card.Text>
            <Button variant="dark"> Button</Button>
          </Card.Body>
        </Card>
        
    );
}

export default OpportunityCard;