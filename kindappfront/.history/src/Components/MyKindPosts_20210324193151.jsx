import React, { useState, useEffect } from 'react';
import OpportunityCreate from './OpportunityCreate';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Container, Row } from 'react-bootstrap';
import Nav from './Nav'
import Profile from './Profile'
import project from '../APIs/project'

function MyKindPosts(props) {
// const [opp, setOpp] = useState([])

    // useEffect(() => {
    //     fetch(
    //         `https://kindapp-backend.herokuapp.com/post/create/${props.match.params.id}`
    //     )
    //         .then((res) => res.json())
    //         .then((res) => setOpp(res))
    //         .catch(console.error);
        
    // }, [props.match.params.id])

    
    // if(!opp){
    //     return <h1>Loading...</h1>
    // }
    // console.log(opp, 'opp')
    // return (
    //     opp != null &&
    //     (<>
            
            <div className="cards-container">

                <Container>
                    <Row className="adding-margin">
                        {/* post is the array of objects, when u map over it we make data=post */}
                        {/* {opp.map((opps) => {
                            return (
                                <OpportunityCreate opp={opps} setOpp={setOpp}/>
                            );
                        })} */}
    
                    </Row>


                </Container>
            </div>
        // </>)
    )
    
}

export default MyKindPosts;