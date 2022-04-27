import React,{useEffect,useState} from "react"
import { useParams, useNavigate } from "react-router-dom"

const UserDetail = () => {
    const [user, setUser] = useState({})

    let params = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/'+params.id)
        .then(res => res.json())
        .then(result => setUser(result))
        .catch(err => console.log(err))
    },[])

    console.log(user)
    function acceptFunc(){
        alert("User is accepted")
    }

    function rejectFun(){
        alert("User is rejected")
    }

    return (
        <>
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
        </>
    )
}

export default UserDetail