import React, { useEffect, useState } from "react";
import project from "../APIs/project";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormGroup,
  Button,
  Row,
  Container,
  Card,
} from "react-bootstrap";
import "../App.css";
import formpic from "../formpic.jpg";
import { Link } from "react-router-dom";
import placeholder from "../placeholderimg.jpg";
// import { useForm } from "react-hook-form";
// import OpportunityCard from "./OpportunityCard";

function OpportunityCreate({ opp, setOpp }) {

  const initialState = {
    title: "",
    Cause_type: "",
    Organization: "",
    Url: "",
    Description: "",
  };
  const [formState, setFormState] = useState(initialState);
  // const {addNewPost, handleSubmit} = useForm()

  let userInput = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value });
    console.log(event)
  };
  const submitNewPost = (event) => {
    event.preventDefault();
    console.log(formState)
    setFormState(initialState)
  }

  const fetchProjects = async () => {
    var response = await project.get(
      "https://kindapp-backend.herokuapp.com/post/create"
    );
    setOpp(response.data);
    console.log(response);
  };

  // useEffect(() => {
  //   fetchProjects().then(data => setFormState(data));
  // }, []);

  //   const [posts, setPosts] = useState([]);

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
    <Form className="postform" submitNewPost={userInput}>
      <Row>
        <h3 className="formheading">Post a volunteer opportunity!</h3>
      </Row>
      <Form.Group controlId="numone">
        <Form.Label>Title</Form.Label>
        <Form.Control id="id" value={formState.id} onChange={userInput} className="forminput" ref="addNewPost" type="text" placeholder="" />
        <Form.Text className="text-muted">
          This is what people will see before clicking your post!
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="SI">
        <Form.Label>Cause Type</Form.Label>
        <Form.Control className="forminput" type="text" placeholder="" />
        <Form.Text className="text-muted">
          Ex: covid-19 relief, fight homelessness, climate change etc.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="SI">
        <Form.Label>Organization</Form.Label>
        <Form.Control className="forminput" type="text" placeholder="" />
        <Form.Text className="text-muted">
          What organization needs our help?
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="SI">
        <Form.Label>Website Link</Form.Label>
        <Form.Control className="forminput" type="text" placeholder="" />
        <Form.Text className="text-muted">
          What organization needs our help?
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="numone">
        <Form.Label>Description</Form.Label>
        <Form.Control className="forminput" type="text" placeholder="" />
        <Form.Text className="text-muted">
          What is it that they need help with?
        </Form.Text>
      </Form.Group>

      <Button type="submit" variant="primary">Save</Button>
      <Container>
        
        {opp.map((opps) => {
          return (
            <Card style={{ width: "18rem" }} className="adding-margin">
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <section className="container">
                    <h3 className="cards-title">{opps.title}</h3>
                  </section>
                </Card.Text>
                <Link to={`/post/create/${opps.id}`} key={opps.id}>
                <Button className="save-button" variant="dark">
                  {" "}
                  More Info
                </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </Form>
  );
}

export default OpportunityCreate;
