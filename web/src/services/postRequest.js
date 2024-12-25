import axios from "axios"

export default async function postRequest(endPoint, data) {

    try {

        console.log('post request --> ', endPoint)
        const response = await axios.post(endPoint, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response.data)

    } catch (error) {
        console.log(error)
    }
}