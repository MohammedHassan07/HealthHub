import axios from "axios"

export default async function postRequest(endPoint, data) {

    try {

        console.log('post request --> ', endPoint)
        const response = await axios.post(endPoint, data)
        
        console.log(response.data)

    } catch (error) {
        console.log(error)
    }
}