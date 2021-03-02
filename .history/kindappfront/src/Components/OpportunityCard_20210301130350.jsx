import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function OpportunityCard(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('localhost:8000/posts')
    .then((res) => res.json())
    .then((res) => {
      setPosts(res);  
    })
    .catch(console.error)
    }, []);
    
    return (
        <section className="container">
            {posts.map((post) => {
        return(
            <Link to={`/details/${posts.id}`} key={posts.id}>
            <div className="card">
                <div className="card-image">
                    <img src={posts.image} alt={post.name}/>
            </div>
                <div className="card-title">
                    <h3>{posts.name}</h3>
                </div>
            </div>
          </Link>
            );
            })} 
      </section>
    );
}

export default OpportunityCard;