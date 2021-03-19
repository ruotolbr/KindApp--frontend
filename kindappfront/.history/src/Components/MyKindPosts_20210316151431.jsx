import React, { useEffect } from 'react';
import OpportunityCreate from './OpportunityCreate';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Container, Row } from 'react-bootstrap';
import Nav from './Nav'
import Profile from './Profile'
import project from '../APIs/project'

function MyKindPosts({ props, opp, setOpp }) {
    

    useEffect(() => {
        fetch(
            `https://kindapp-backend.herokuapp.com/post/create/${opp.match.params.id}`
        )
            .then((res) => res.json())
            .then((res) => setOpp(res))
            .catch(console.error);
        
    }, [opp.match.params.id])
    if(!opp.length == null){
        return <h1>Loading...</h1>
    }
    console.log(opp, 'opp')
    return (
        <>
            <div>
            <header>
                <Profile />
            </header>
            </div>
            <div className="ui center aligned container">
            <Nav />
            </div>
            <div className="cards-container">

                <Container>
                    <Row className="adding-margin">
                        {/* post is the array of objects, when u map over it we make data=post */}
                        {opp.map((opps) => {
                            return (
                                <OpportunityCreate data={opps} />
                            );
                        })}
    
                    </Row>


                </Container>
            </div>
        </>
    )
    
}

export default MyKindPosts;