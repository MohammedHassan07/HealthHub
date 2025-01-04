import axios from "axios"

export default async function postRequest(endPoint, data) {

    try {

        // console.log('post request --> ', endPoint)

        const { token } = JSON.parse(localStorage.getItem('tokenData'))

        const config = {
            headers: {

                token: token
            }
        }

        // console.log(token)
        const response = await axios.post(endPoint, data, config)

        // console.log(response)
        return { response, flag: true }

    } catch (error) {

        if (error.response) {

            // console.log(error.response)
            return { response: error.response.data, flag: false }
        }
    }
}