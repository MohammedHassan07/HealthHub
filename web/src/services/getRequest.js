import axios from "axios"

export default async function getRequest(endPoint) {

    // console.log(endPoint)
    try {

        const { token } = JSON.parse(localStorage.getItem('tokenData'))
        const config = {
            headers: {
                token: token
            }
        }

        const response = await axios.get(endPoint, config)

        // console.log(response)

        return { data: response.data, status: response.status, message: response.data.message }

    } catch (error) {

        if (error.response) {

            // console.log(error.response.data.message)
            return { status: error.response.status, message: error.response.data.message }
        }
    }
}
