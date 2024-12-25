import axios from "axios"

export default async function getRequest(endPoint) {

    console.log(endPoint)
    try {

        const response = await axios.get(endPoint)

        console.log(response.data);
        
    } catch (error) {
        // Handle any errors
        console.error('There was an error!', error);
    }
}
