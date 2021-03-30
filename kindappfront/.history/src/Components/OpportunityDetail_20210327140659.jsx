import React, { useState, useEffect } from 'react';
import fhpic from '../fhpic.jpg'

function OpportunityDetails(props) {
    const [task, setTask ] = useState(null);
    
    
        useEffect(() => {
            fetch(
              `https://kindapp-backend.herokuapp.com/post/${props.match.params.id}`
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
            <span>
              <img className='fh-pic'
              src={fhpic}
              alt={task.title}
              />
            </span>
            <div className="details">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <a className='readmore'
                href={task.url} target='_blank' rel='noopener noreferrer'>
                Read More
              </a>
            </div>
          </div>)
        );
    }
    
export default OpportunityDetails;