import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function getUsers(){
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result => {
            setData(result)
            localStorage.setItem('users',JSON.stringify(result))
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        const userData = localStorage.getItem('users')
        if(userData){
            setData(JSON.parse(userData))
        }else{
            getUsers()
        }
    },[])
    console.log(data)

    return (
        <>
            {!isLoading ? 
            <div>
                <div style={{textAlign:"center"}}>
                    <Link to="/accepted-users"><button>Accepted List</button></Link>
                    <Link to="/rejected-users"><button>Rejected List</button></Link>
                </div>
                {data.length > 0 && data.map((ele,index) => {
                    return (
                        <div key={index}>
                            <Link to={`/user/${ele.id}`}>
                                <h3>Name : {ele.name}</h3>
                                <div>Id : {ele.id}</div>
                                <div>Email : {ele.email}</div>
                                <div>Phone : {ele.phone}</div>
                                <div>Website : {ele.website}</div>
                            </Link>
                            <hr/>
                        </div>
                    )
                })
                }
            </div> : <Loader/>}
            
        </>
    )
}

export default Home