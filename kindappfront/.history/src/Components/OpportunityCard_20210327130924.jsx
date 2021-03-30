import React from "react";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/esm/Button'
import { Card, Button } from "react-bootstrap";
import placeholder from "../placeholderimg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import project from "../APIs/project";
import "../App.css"

function OpportunityCard({ data }) {


  
    // const [posts, setPosts] = useState([]);

  //   const fetchPosts  = async () =>{

  //     var response = await project.get('https://kindapp-backend.herokuapp.com/posts/')
  //     setPosts(response.data)
  //     console.log(response.data)
  // }

  // useEffect(()=>{
  //     fetchPosts()
  // },[])

  // useEffect(() => {
  // fetch('http://localhost:8000/posts')
  // .then((res) => res.json())
  // .then((res) => {
  //   setPosts(res);
  // })
  // .catch(console.error)
  // }, []);

  return (
    <Card style={{ width: "18rem" }} className="adding-margin">
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <section className="container">
           
              <h3 className="cards-title">{data.title}</h3>
            
          </section>
        </Card.Text> 
        <Link to={`/details/${data.id}`} key={data.id}>
        <Button className="save-button" variant="dark">
          {" "}
          More Info
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default OpportunityCard;
