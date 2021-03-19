import React, {useState} from 'react';
import OpportunityCard from './OpportunityCard';




const Profile = ({ posts, setPosts }) => {
    const [formState, setFormState] = useState([]);
    // const fetchProjects = async () => {

    //     var response = await project.get('https://kindapp-backend.herokuapp.com/posts/')
    //     setPosts(response.data)
    //     console.log(response)
    // }

    // useEffect(() => {
    //     fetchProjects()
    // }, [])

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
        <form>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        // onChange={handleChange}
        value={formState.username}
      />
      <input>
      
      </input>
      <button type="submit">Login</button>
    </form>
    <div>
      <OpportunityCard data={setPosts} />
    </div>
        </>
    )
}

export default Profile