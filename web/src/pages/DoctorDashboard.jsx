import React, { useEffect } from 'react'

const DoctorDashboard = () => {

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
    
    <h1>Doctor Dashboard</h1>
    
  )
}

export default DoctorDashboard
