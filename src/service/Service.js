import axios from "axios"

export const apiAlcance = 
axios.create({
    baseURL:`https://alcance-api-rest.herokuapp.com/`
})
