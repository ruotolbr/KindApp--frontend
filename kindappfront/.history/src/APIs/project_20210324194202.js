import axios from 'axios'


export default axios.create({
    baseURL:'https://kindapp-backend.herokuapp.com/kindapi'
})

