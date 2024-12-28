import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HospitalDashboard = () => {

  const navigate = useNavigate()
  
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

    <h1>Hospital Dashboard</h1>

  )
}

export default HospitalDashboard
