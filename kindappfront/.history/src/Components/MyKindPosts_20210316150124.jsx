import React, { useEffect } from 'react';
import OpportunityCreate from './OpportunityCreate';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Container, Row } from 'react-bootstrap';
import Nav from './Nav'
import Profile from './Profile'
import project from '../APIs/project'

function MyKindPosts({ data }) {
    

    useEffect(() => {
        fetch(
            `https://kindapp-backend.herokuapp.com/post/create/${props.match.params.id}`
        )
    }, [])
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
                        
                            return (
                                <OpportunityCreate data={opps} />
                            );
                        )
    
                    </Row>


                </Container>
            </div>
        </>
    )
    
}

export default MyKindPosts;