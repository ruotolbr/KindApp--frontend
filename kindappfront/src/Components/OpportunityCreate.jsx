import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, FormGroup, Button, Row, Col, Container} from 'react-bootstrap';
import "../App.css"
import formpic from "../formpic.jpg"



function OpportunityCreate({ data }) {
  const initialState = {
      title: '',
      Cause_type: '', 
      Organization: '',
      Url: '',
      Description: '',
  };
  const [formState, setFormState] = useState(initialState);

  




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
        <Form className="postform">
        <Form.Group controlId="numone">
          <h3 className="formheading">Post a volunteer opportunity!</h3>
          <Form.Label>Title</Form.Label>
          <Form.Control className="forminput" type="text" placeholder="" />
          <Form.Text className="text-muted">This is what people will see before clicking your post!</Form.Text>
        </Form.Group>
        <Form.Group controlId="SI">
          <Form.Label>Cause Type</Form.Label>
          <Form.Control className="forminput" type="text" placeholder="" />
          <Form.Text className="text-muted">Ex: covid-19 relief, fight homelessness, climate change etc.</Form.Text>
        </Form.Group>
        <Form.Group controlId="SI">
          <Form.Label>Organization</Form.Label>
          <Form.Control className="forminput" type="text" placeholder="" />
          <Form.Text className="text-muted">What organization needs our help?</Form.Text>
        </Form.Group>
        <Form.Group controlId="SI">
          <Form.Label>Website Link</Form.Label>
          <Form.Control className="forminput" type="text" placeholder="" />
          <Form.Text className="text-muted">What organization needs our help?</Form.Text>
        </Form.Group>
        <Form.Group controlId="numone">
          <Form.Label>Description</Form.Label>
          <Form.Control className="forminput" type="text" placeholder="" />
          <Form.Text className="text-muted">What is it that they need help with?</Form.Text>
        </Form.Group>
          <Button variant="primary">Search</Button>
        </Form>

    );
  }
  
  export default OpportunityCreate;