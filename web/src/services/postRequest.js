import axios from "axios"

export default async function postRequest(endPoint, data) {

    try {

        // console.log('post request --> ', endPoint)

        const tokenData = localStorage.getItem('tokenData')

        const config = {
            headers: {

                token: tokenData.token,
                'Content-Type': 'application/json'
            }
        }

        const response = await axios.post(endPoint, data, config)

        // console.log(response)

        return { data: response.data, status: response.status, message: response.message }

    } catch (error) {

        if (error.response) {

            // console.log(error.response.data.message)
            return { status: error.response.status, message: error.response.data.message }
        }
    }
}