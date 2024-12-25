import axios from "axios"

export default async function postRequest(endPoint, data) {

    try {

        console.log('post request --> ', endPoint)
        const response = await axios.post(endPoint, data)

        // console.log(response)
        return { response, flag: true }

    } catch (error) {

        if (error.response) {

            return { response: error.response.data, flag: false }
        }
    }
}