    //Manages todo items via different methods
    import axios  from 'axios';
    import { authService } from './authService';


    const API_URL = 'http://localhost:9090/api'
    //authorization header with the Bearer token
    const authHeader = ()  => ({
        Authorization: `Bearer ${authService.getToken()}`
    })

    export const taskService = {
        getAll: async () => {
            const response = await axios.get(`${API_URL}/todo`, {
                headers: authHeader()
            })
            return response.data;
        },
        getById: async (id) => {
            const response = await axios.get(`${API_URL}/todo/${id}`, {
                headers: authHeader()
            })
            return response.data;
        },

    }







