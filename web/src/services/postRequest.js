import axios from "axios"

export default async function postRequest(endPoint, data) {

    try {

        const response = await axios.post(endPoint, data)

        console.log(response)

    } catch (error) {
        console.log(error)
    }
}