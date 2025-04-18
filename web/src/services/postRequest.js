import axios from "axios"

export default async function postRequest(endPoint, data) {

    try {

        // console.log('post request --> ', endPoint)

        let config = {}
        if (!endPoint.includes('/login')) {

            // console.log('post request --> ', endPoint)
            const { token } = JSON.parse(localStorage.getItem('tokenData'))
            config = {
                headers: {
                    token: token
                }
            }
        } else {
            config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        }

        // console.log(config)
        const response = await axios.post(endPoint, data, config)

        console.log(response)

        return { data: response.data, status: response.status, message: response.data.message }

    } catch (error) {

        if (error.response) {

            // console.log(error.response.data.message)
            return { status: error.response.status, message: error.response.data.message }
        }
    }
}