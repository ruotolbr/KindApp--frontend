import React, { useState, useEffect } from 'react';
import OpportunityCreate from './OpportunityCreate';
import OpportunityCard from './OpportunityCard'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Container, Row, Div } from 'react-bootstrap';
import Nav from './Nav'
import Profile from './Profile'
import project from '../APIs/project'

function MyKindPosts({ opp, setOpp }) {
// const [opp, setOpp] = useState([])

    useEffect(() => {
        fetch(
            `https://kindapp-backend.herokuapp.com/post/create/`
        )
            .then((res) => res.json())
            .then((res) => setOpp(res))
            .catch(console.error);
        
    }, [])
    if(!opp){
        return <h1>Loading...</h1>
    }
    console.log(opp, 'opp')
    return (
        
            <OpportunityCreate opp={opps} setOpp={setOpp}/>

        
    // opp != null &&
        
        
            
            <div className="cards-container">

                <Container>
                    <Row className="adding-margin">
                        {/* post is the array of objects, when u map over it we make data=post */}
                        {opp.map((opps) => {
                            return (
                                <OpportunityCard data={opps} />
                            );
                        })}
    
                    </Row>


                </Container>
            </div>
         
                    
    )
    
}

export default MyKindPosts;