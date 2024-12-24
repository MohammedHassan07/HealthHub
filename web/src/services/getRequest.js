import axios from "axios"

export default async function getRequest(endPoint) {

    try {

        const response = await axios.get(endPoint)

        console.log(response)

    } catch (error) {
        console.log(error)
    }
}