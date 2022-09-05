import axios from "axios"

export const apiAlcance = 
axios.create({
    //baseURL:`http://localhost:3000/`
    baseURL:`https://alcance-api-rest.herokuapp.com/`,
    //timeout: 1000,
})
