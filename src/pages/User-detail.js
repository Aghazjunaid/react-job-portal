import React,{useEffect,useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import Loader from "../components/Loader"

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
        alert("User is accepted")
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
        alert("User is rejected")
        navigate('/rejected-users')
    }

    return (
        <>
            {!isLoading ? 
            <div>
                <div style={{textAlign:"center"}}>
                    <button onClick={acceptFunc}>Accept</button>
                    <button onClick={rejectFun}>Reject</button>
                </div>
                <div>
                    <h3>Name : {user.name}</h3>
                    <div>Id : {user.id}</div>
                    <div>Email : {user.email}</div>
                    <div>Phone : {user.phone}</div>
                    <div>Website : {user.website}</div>
                </div>
            </div> : <Loader/>}
        </>
    )
}

export default UserDetail