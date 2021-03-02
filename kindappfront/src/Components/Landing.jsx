import React, {useState, useEffect} from 'react'
import OpportunityCard from './OpportunityCard'
import project from '../APIs/project'
import { Container, Row, Col } from 'react-bootstrap';


const LandingPage = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    const fetchProjects  = async () =>{
        
        var response = await project.get('http://localhost:8000/posts')
        setProjectInfo(response.data)
        console.log(response.data)
    }

    useEffect(()=>{
        fetchProjects()
    },[])

    return (
        <>
            <div className="ui center aligned container">
                
                
                {console.log(projectInfo)}
            </div>
            <div className="cards-container">
                
            <Container>
                <Row className="adding-margin">
            {projectInfo.map((post) => {
                    return(
                    <h4>{post.title}</h4>
                    
                    ); 
                })}
                
                {/* <OpportunityCard />
                <OpportunityCard /> */}
            <OpportunityCard />
                </Row>
                <Row>
                 {/* <OpportunityCard />
                <OpportunityCard />
                <OpportunityCard />     */}
                </Row>
                
            
            </Container>
            </div>
        </>
    )
}

export default LandingPage
