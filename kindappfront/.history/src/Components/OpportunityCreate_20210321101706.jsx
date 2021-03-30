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
import axios from "axios";
import formpic from "../formpic.jpg";
import { Link } from "react-router-dom";
import placeholder from "../placeholderimg.jpg";
import { useForm } from "react-hook-form";
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
  const onSubmit = (event) => {
    console.log(event)
    setFormState(initialState)
  }
  
  async function getUserData(){
    const userAPI = "https://kindapp-backend.herokuapp.com/post/create/"
    try {
      
      const response = axios.get("userAPI");
      setOpp(response.data);
    } catch(error){
      console.log("error", error)
    }
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
  const { register, handleSubmit, errors } =useForm();

  return (
    <Form className="postform" onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <h3 className="formheading">Post a volunteer opportunity!</h3>
      </Row>
      <Form.Group className="form-elements">
        <Form.Label className="form-label">Title</Form.Label>
        <Form.Control
          id="id"
          value={formState.title}
          name="Title"
          ref={register({
            required: "A post title is required.",
            minLength: {
              value: 6,
              message: "Sorry! Your title isn't long enough. Jazz it up a bit?",
            },
          })}
          onChange={setFormState}
          className="forminput"
          type="text"
          placeholder=""
        />
        <Form.Text className="text-muted">
          This is what people will see before clicking your post!
          {errors.Title && (
          <span className="form-error">{errors.Title.message}</span>)}
        </Form.Text>
        
        
      
        <Form.Label className="form-label">Cause Type</Form.Label>
        <Form.Control
          value={formState.Cause_type}
          name="Cause Type"
          ref={register({ 
            required: "Cause type is required.", 
            minLength: {
              value: 3,
              message: "Cause type must be at least 3 characters." 
            },
          })}
          onChange={setFormState}
          className="forminput"
          type="text"
          placeholder=""
        />
        <Form.Text className="text-muted">
          Ex: covid-19 relief, fight homelessness, climate change etc.
        </Form.Text>
        {errors.Cause_type && (
          <span className="form-error">
            Cause Type must be min. of 3 characters.
          </span>
        )}
      
        <Form.Label className="form-label">Organization</Form.Label>
        <Form.Control
          value={formState.Organization}
          name="Organization"
          ref={register({ required: true })}
          onChange={setFormState}
          className="forminput"
          type="text"
          placeholder=""
        />
        <Form.Text className="text-muted">
          What organization needs our help?
          {errors.Cause_type && (
          <span className="form-error">Must have organization name.</span>
        )}
        </Form.Text>
        
      
      
        <Form.Label className="form-label">Website Link</Form.Label>
        <Form.Control
          value={formState.Url}
          name="Website Link"
          ref={register}
          onChange={setFormState}
          className="forminput"
          type="text"
          placeholder=""
        />
        <Form.Text className="text-muted">
          What organization needs our help?
        </Form.Text>
      
     
        <Form.Label className="form-label">Description</Form.Label>
        <Form.Control
          value={formState.Description}
          name="Description"
          ref={register({ required: true, minLength: "8" })}
          onChange={setFormState}
          className="forminput"
          type="text"
          placeholder=""
        />
        <Form.Text className="text-muted">
          What is it that they need help with?
        </Form.Text>
        {errors.Cause_type && (
          <span className="form-error">
            Your post description is too short! Need more deets!
          </span>
        )}
      </Form.Group >

      <Button type="submit" variant="primary">
        Save
      </Button>

      <Container>
        {/* {opp.map((opps) => {
          
          if (!opp){
            return <h3>Loading your post!...</h3>
          }
          
          console.log("opp", opp) */}
        return (
        <Card style={{ width: "18rem" }} className="adding-margin">
          <Card.Img variant="top" src={placeholder} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <section className="container">
                {/* <h3 className="cards-title">{opps.title}</h3> */}
              </section>
            </Card.Text>
            {/* <Link to={`/post/create/${opps.id}`} key={opps.id}> */}
            <Button className="save-button" variant="dark">
              {" "}
              More Info
            </Button>
            {/* </Link> */}
          </Card.Body>
        </Card>
        );
        {/* })} */}
      </Container>
    </Form>
  );
}

export default OpportunityCreate;
