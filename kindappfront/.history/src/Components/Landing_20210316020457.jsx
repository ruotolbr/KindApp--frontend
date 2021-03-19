import React, { useEffect, Route } from 'react'
import OpportunityCard from './OpportunityCard'
import project from '../APIs/project'
import { Container, Row } from 'react-bootstrap';
import Nav from './Nav'
import Profile from './Profile'


const LandingPage = ({ posts, setPosts }) => {
    // const [projectInfo, setProjectInfo] = useState([]);
    const fetchProjects = async () => {

        var response = await project.get('https://kindapp-backend.herokuapp.com/posts/')
        setPosts(response.data)
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
                        {posts.map((post) => {
                            return (
                                <OpportunityCard data={post} />
                            );
                        })}
    
                    </Row>


                </Container>
            </div>
        </>
    )
}

export default LandingPage