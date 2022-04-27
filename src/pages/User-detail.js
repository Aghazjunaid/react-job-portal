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
        let acceptedData = localStorage.getItem("accepted")
        let userData = localStorage.getItem('users')
        let newArr = JSON.parse(userData).filter(ele => ele.id !== user.id)
        localStorage.setItem('users',JSON.stringify(newArr))
        if(acceptedData){
            let parsedData = JSON.parse(acceptedData)
            parsedData.push(user)
            localStorage.setItem("accepted",JSON.stringify(parsedData))
        } else {
            let arr = []
            arr.push(user)
            localStorage.setItem("accepted",JSON.stringify(arr))
        }
        alert("User is accepted")
        navigate('/accepted-users')
    }

    function rejectFun(){
        let acceptedData = localStorage.getItem("rejected")
        let userData = localStorage.getItem('users')
        let newArr = JSON.parse(userData).filter(ele => ele.id !== user.id)
        localStorage.setItem('users',JSON.stringify(newArr))
        if(acceptedData){
            let parsedData = JSON.parse(acceptedData)
            parsedData.push(user)
            localStorage.setItem("rejected",JSON.stringify(parsedData))
        } else {
            let arr = []
            arr.push(user)
            localStorage.setItem("rejected",JSON.stringify(arr))
        }
        alert("User is rejected")
        navigate('/rejected-users')
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