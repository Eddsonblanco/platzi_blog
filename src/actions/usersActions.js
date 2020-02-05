import axios from 'axios';



export const getAll = () => async ( dispatch ) =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: 'get_user',
        payload: response.data
    })
}