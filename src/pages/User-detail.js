import React,{useEffect,useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
import {Row,Col, Button, Container} from 'react-bootstrap' 

const UserDetail = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users/'+params.id)
        .then(res => res.json())
        .then(result => {
            setUser(result)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err) 
            setIsLoading(false)
        })
    },[])

    console.log(user)

    function getUserData(userBody){
        const userData = localStorage.getItem('users')
        const newArr = JSON.parse(userData).filter(ele => ele.id !== userBody.id)
        localStorage.setItem('users',JSON.stringify(newArr))
    }

    function acceptFunc(){
        const acceptedData = localStorage.getItem("accepted")
        getUserData(user)
        if(acceptedData){
            const parsedData = JSON.parse(acceptedData)
            parsedData.push(user)
            localStorage.setItem("accepted",JSON.stringify(parsedData))
        } else {
            const arr = [user]
            localStorage.setItem("accepted",JSON.stringify(arr))
        }
        navigate('/accepted-users')
    }

    function rejectFun(){
        const acceptedData = localStorage.getItem("rejected")
        getUserData(user)
        if(acceptedData){
            const parsedData = JSON.parse(acceptedData)
            parsedData.push(user)
            localStorage.setItem("rejected",JSON.stringify(parsedData))
        } else {
            const arr = [user]
            localStorage.setItem("rejected",JSON.stringify(arr))
        }
        navigate('/rejected-users')
    }

    return (
        <>
            {!isLoading ? 
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="image" className="img-fluid"/>
                                <div className="prodBtn mt-3">
                                    <Button variant="warning" className="" onClick={acceptFunc}>Accept</Button>
                                    <Button variant="primary" onClick={rejectFun}>Reject</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h2 style={{color:"black"}} className="mt-5">{user.name}</h2>
                                <div style={{fontSize:"15px", color:"black"}}>Username: {user.username}</div>
                                <div style={{fontSize:"15px", color:"black"}}>Email: {user.email}</div>
                                <div className="price mt-2" style={{color:"#850f0f"}}>Phone: { user.phone }</div>
                                <div className="price mt-2" style={{color:"#850f0f"}}>Website: { user.website }</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> : <Loader/>}
        </>
    )
}

export default UserDetail