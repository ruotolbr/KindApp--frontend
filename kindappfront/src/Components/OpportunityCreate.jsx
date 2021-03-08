import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, FormGroup, Button} from 'react-bootstrap';
import "../App.css"



function OpportunityCreate({ data }) {
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
        <Form>
        <FormGroup controlId="kindpost">
          <h3>Where do you want to go?</h3>
          <Form.Control type="text" placeholder="Put place here." />
          <Button variant="dark">Search</Button>
        </FormGroup>
        </Form>
      
    );
  }
  
  export default OpportunityCreate;