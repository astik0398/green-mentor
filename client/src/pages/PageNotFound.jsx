import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const [time, setTime] = useState(5)
    let id
    const navigate = useNavigate()

    useEffect(()=> {
        id = setInterval(()=> {
            setTime(prev=> prev-1)
        }, 1000)

       return ()=> clearInterval(id)

    }, [time])

    if(time == 0){
        navigate('/')
    }
  return (
    <div>
        <h2>
        NO SUCH PAGE EXISTS !! redirecting you to homepage in {time}
        </h2>
    </div>
  )
}

export default PageNotFound