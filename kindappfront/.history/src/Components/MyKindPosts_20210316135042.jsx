import React from 'react';
import OpportunityCreate from './OpportunityCreate';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Container, Row } from 'react-bootstrap';
import Nav from './Nav'
import Profile from './Profile'
import project from '../APIs/project'

function MyKindPosts({ opp, setOpp }) {
    const fetchProjects = async () => {

        var response = await project.get('https://kindapp-backend.herokuapp.com/posts/')
        setOpp(response.data)
        console.log(response)
    }

    useEffect(() => {
        fetchProjects()
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