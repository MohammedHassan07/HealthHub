import React, { useEffect } from 'react'

const PharmaDashboard = () => {

    useEffect(() => {

        const tokenData = localStorage.getItem('tokenData')
        if (tokenData) {

            const { token } = JSON.parse(tokenData)
            console.log('Token found:', token)
        } else {
            navigate('/')
        }
    }, [])

    return (
        <h1>Pharma Dashboard</h1>
    )
}

export default PharmaDashboard
