import React, { useState, useEffect } from 'react';

function BirdDetails(props) {
    const [task, setTask ] = useState(null);
    
    
        useEffect(() => {
            fetch(
              `http://localhost:8000/posts`
          )
            .then((res) => res.json())
            .then((res) => setTask(res))
            .catch(console.error);
    
        }, [props.match.params.id]);
        if(!task) {
            return <h1>Loading...</h1>
        }
        console.log(task, 'task')
        return (
          task != null &&
            (<div className="details-container">
            <img
              src={task.image}
              alt={task.name}
            />
            <div className="details">
              <p>test</p>
              <h2>{task.name}</h2>
              <h3>({task.genus})</h3>
              <h4>Conservation Status</h4>
              <p>{task.conservationStatus}</p>
              <a
                href={task.homepage} target='_blank' rel='noopener noreferrer'>
                Read More
              </a>
            </div>
          </div>)
        );
    }
    
    export default BirdDetails;